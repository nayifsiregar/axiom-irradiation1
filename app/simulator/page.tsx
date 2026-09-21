"use client";

import { useState } from "react";
import SimulatorForm, { SimulatorInput } from "@/components/SimulatorForm";
import SimulatorResults from "@/components/SimulatorResults";
import SciencePanel from "@/components/SciencePanel";

export default function SimulatorPage() {
  const [input, setInput] = useState<SimulatorInput | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="max-w-3xl">
        <span className="inline-block rounded-full border border-axiom-bright/40 bg-axiom-bright/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-axiom-bright">
          Simulator Edukasi
        </span>
        <h1 className="mt-5 font-axiom text-4xl md:text-5xl font-bold">
          Simulator <span className="text-axiom-bright">Iradiator</span>
        </h1>
        <p className="mt-4 text-white/80">
          Estimasi waktu iradiasi, laju dosis, dan throughput berbasis model fisika dasar.
        </p>
      </header>

      {/* Disclaimer atas */}
      <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5 text-sm text-amber-200/90">
        <strong className="block mb-1">Penting</strong>
        Simulator ini adalah alat edukasi berbasis model fisika dasar (inverse square law,
        peluruhan radioaktif) dan literatur ilmiah publik. Hasil adalah estimasi,{" "}
        <strong>BUKAN</strong> pengganti dose mapping, validasi dosimetri, atau perhitungan
        resmi sesuai ISO 11137 series dan pedoman IAEA SSG-8.
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-axiom text-xl font-semibold mb-5">Input Parameter</h2>
          <SimulatorForm onSubmit={setInput} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          {input ? (
            <SimulatorResults input={input} />
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 p-16 text-center text-white/50">
              Hasil akan tampil di sini setelah Anda menekan <em>Hitung Estimasi</em>.
            </div>
          )}
          <SciencePanel />
        </div>
      </div>
    </div>
  );
}