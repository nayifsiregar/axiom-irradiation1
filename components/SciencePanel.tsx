const refs = [
  {
    title: "IAEA Safety Standards Series SSG-8",
    desc: "Radiation Safety of Gamma, Electron and X-ray Irradiation Facilities.",
  },
  {
    title: "ISO 11137-1 / -2 / -3",
    desc: "Sterilization of health care products — Radiation.",
  },
  {
    title: "ISO/ASTM 51608 & 52303",
    desc: "Practice for dosimetry in gamma/e-beam/X-ray irradiation facilities.",
  },
  {
    title: "IAEA SSG-8 (referensi teknis)",
    desc: "Acuan desain dan keselamatan fasilitas iradiator Kategori I & II.",
  },
];

export default function SciencePanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="font-axiom text-lg font-semibold">Dasar Ilmiah & Referensi</h3>
      <p className="mt-2 text-xs text-axiom-gray">
        Model perhitungan mengacu pada standar dan literatur publik berikut (judul dan sumber;
        tanpa kutipan penuh).
      </p>
      <ul className="mt-4 space-y-3">
        {refs.map((r) => (
          <li key={r.title} className="border-l-2 border-axiom-bright/60 pl-4">
            <p className="text-sm font-semibold text-white">{r.title}</p>
            <p className="text-xs text-white/70">{r.desc}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-white/50">
        Untuk validasi resmi, rujuk publikasi IAEA dan ISO terkini, serta hasil dose mapping
        empiris fasilitas.
      </p>
    </div>
  );
}