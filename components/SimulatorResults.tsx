"use client";

import {
  decayActivity,
  HALF_LIFE_YEARS,
  indicativeDUR,
  irradiationTimeHours,
  throughputKgPerHour,
} from "@/lib/physics";
import { SOURCE_PRESETS } from "@/lib/simulator-constants";
import { SimulatorInput } from "./SimulatorForm";
import DoseChart from "./DoseChart";

interface Props {
  input: SimulatorInput;
}

export default function SimulatorResults({ input }: Props) {
  const preset = SOURCE_PRESETS[input.source];
  const halfLife = HALF_LIFE_YEARS[input.source];
  const elapsed = Math.max(0, input.currentYear - input.installationYear);

  // Aktivitas saat ini (khusus sumber radioaktif)
  const currentActivity = preset.supportsDecay
    ? decayActivity(input.activityA0, halfLife, elapsed)
    : input.activityA0;

  // Laju dosis pada 1 m dari sumber, dikoreksi terhadap peluruhan
  const doseRateAt1m =
    preset.nominalDoseRateAt1m * (currentActivity / input.activityA0);

  // Laju dosis pada jarak produk (inverse square)
  const effectiveDoseRate = doseRateAt1m * Math.pow(1 / input.distance, 2);

  // Waktu iradiasi
  const timeHours = irradiationTimeHours(input.targetDose, effectiveDoseRate);

  // DUR indikatif
  const dur = indicativeDUR(input.density);

  // Throughput
  const throughput = throughputKgPerHour(input.massPerCycleKg, timeHours);

  return (
    <div className="space-y-6">
      {/* Ringkasan */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Stat label="Aktivitas Saat Ini" value={`${currentActivity.toFixed(2)} Ci`} />
        <Stat
          label="Laju Dosis Efektif"
          value={`${effectiveDoseRate.toFixed(3)} kGy/jam`}
        />
        <Stat
          label="Estimasi Waktu Iradiasi"
          value={isFinite(timeHours) ? `${timeHours.toFixed(3)} jam` : "—"}
        />
        <Stat
          label="Rentang Indikatif DUR"
          value={`${dur.min.toFixed(2)} – ${dur.max.toFixed(2)}`}
          note="Nilai aktual wajib melalui dose mapping."
        />
        <Stat
          label="Estimasi Throughput"
          value={`${throughput.toFixed(2)} kg/jam`}
        />
        <Stat
          label="Dosis Target"
          value={`${input.targetDose} kGy`}
        />
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="font-axiom text-lg font-semibold">Laju Dosis vs Jarak</h3>
        <p className="mt-1 text-xs text-axiom-gray">
          Berdasarkan inverse square law dari laju dosis pada 1 m.
        </p>
        <div className="mt-4">
          <DoseChart I1={doseRateAt1m} r1={1} />
        </div>
      </div>

      {/* Disclaimer hasil */}
      <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5 text-sm text-amber-200/90">
        <strong className="block mb-1">Disclaimer</strong>
        Simulator ini adalah alat edukasi berbasis model fisika dasar (inverse square law,
        peluruhan radioaktif) dan literatur ilmiah publik. Hasil adalah estimasi,{" "}
        <strong>BUKAN</strong> pengganti dose mapping, validasi dosimetri, atau perhitungan
        resmi sesuai ISO 11137 series dan pedoman IAEA SSG-8. Keputusan proses
        produksi/sterilisasi aktual wajib melalui prosedur validasi resmi fasilitas.
      </div>
    </div>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-widest text-axiom-gray">{label}</p>
      <p className="mt-2 font-axiom text-2xl font-bold text-axiom-bright">{value}</p>
      {note && <p className="mt-1 text-xs text-white/50">{note}</p>}
    </div>
  );
}