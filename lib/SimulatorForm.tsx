"use client";

import { useState } from "react";
import { SOURCE_PRESETS, USE_CASE_DOSE } from "@/lib/simulator-constants";
import { SourceType } from "@/lib/physics";

export interface SimulatorInput {
  source: SourceType;
  activityA0: number;
  currentYear: number;
  installationYear: number;
  distance: number;         // meter
  targetDose: number;       // kGy
  density: "low" | "medium" | "high";
  massPerCycleKg: number;
}

interface Props {
  onSubmit: (data: SimulatorInput) => void;
}

export default function SimulatorForm({ onSubmit }: Props) {
  const nowYear = new Date().getFullYear();
  const [form, setForm] = useState<SimulatorInput>({
    source: "Co-60",
    activityA0: 100,
    currentYear: nowYear,
    installationYear: nowYear - 2,
    distance: 1,
    targetDose: 25,
    density: "medium",
    massPerCycleKg: 50,
  });

  const preset = SOURCE_PRESETS[form.source];

  const update = <K extends keyof SimulatorInput>(key: K, value: SimulatorInput[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-6"
    >
      {/* Sumber */}
      <div>
        <label className="block text-sm font-medium text-white/80">Jenis Sumber</label>
        <select
          value={form.source}
          onChange={(e) => update("source", e.target.value as SourceType)}
          className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5 text-white"
        >
          {(Object.keys(SOURCE_PRESETS) as SourceType[]).map((s) => (
            <option key={s} value={s}>
              {SOURCE_PRESETS[s].label}
            </option>
          ))}
        </select>
        <p className="mt-2 text-xs text-axiom-gray">{preset.description}</p>
      </div>

      {/* Aktivitas + tahun */}
      {preset.supportsDecay && (
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-white/80">
              Aktivitas A₀ (Ci)
            </label>
            <input
              type="number"
              min={1}
              value={form.activityA0}
              onChange={(e) => update("activityA0", Number(e.target.value))}
              className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80">Tahun Instalasi</label>
            <input
              type="number"
              value={form.installationYear}
              onChange={(e) => update("installationYear", Number(e.target.value))}
              className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80">Tahun Sekarang</label>
            <input
              type="number"
              value={form.currentYear}
              onChange={(e) => update("currentYear", Number(e.target.value))}
              className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5"
            />
          </div>
        </div>
      )}

      {/* Jarak */}
      <div>
        <label className="block text-sm font-medium text-white/80">
          Jarak produk ke sumber (meter)
        </label>
        <input
          type="number"
          min={0.1}
          step={0.1}
          value={form.distance}
          onChange={(e) => update("distance", Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5"
        />
      </div>

      {/* Target dosis */}
      <div>
        <label className="block text-sm font-medium text-white/80">
          Target Dosis (kGy)
        </label>
        <input
          type="number"
          min={0.1}
          step={0.1}
          value={form.targetDose}
          onChange={(e) => update("targetDose", Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {USE_CASE_DOSE.map((u) => (
            <button
              key={u.label}
              type="button"
              onClick={() => update("targetDose", u.value)}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-axiom-bright hover:text-axiom-bright"
              title={u.note}
            >
              {u.label}: {u.value} kGy
            </button>
          ))}
        </div>
      </div>

      {/* Densitas */}
      <div>
        <label className="block text-sm font-medium text-white/80">Kategori Densitas Produk</label>
        <select
          value={form.density}
          onChange={(e) => update("density", e.target.value as SimulatorInput["density"])}
          className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5"
        >
          <option value="low">Rendah (&lt; 0.5 g/cm³)</option>
          <option value="medium">Sedang (0.5–1.0 g/cm³)</option>
          <option value="high">Tinggi (&gt; 1.0 g/cm³)</option>
        </select>
      </div>

      {/* Massa per siklus */}
      <div>
        <label className="block text-sm font-medium text-white/80">
          Massa produk per siklus (kg)
        </label>
        <input
          type="number"
          min={1}
          value={form.massPerCycleKg}
          onChange={(e) => update("massPerCycleKg", Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-white/15 bg-axiom-dark px-4 py-2.5"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-axiom-bright py-3 font-semibold text-axiom-dark hover:bg-white transition"
      >
        Hitung Estimasi
      </button>
    </form>
  );
}