import { Target, ShieldCheck, Activity, Leaf } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Kontrol dosis akurat di setiap proses." },
  { icon: ShieldCheck, title: "Safety", desc: "Sesuai standar BAPETEN dan IAEA SSG-8." },
  { icon: Activity, title: "Reliability", desc: "Kontinuitas layanan industri terjamin." },
  { icon: Leaf, title: "A Safer Tomorrow", desc: "Komitmen keberlanjutan & kesehatan publik." },
];

export default function ValuesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-axiom text-3xl md:text-4xl font-bold text-center">
        Mengapa <span className="text-axiom-bright">AXIOM</span>
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-axiom-bright/50 transition"
          >
            <Icon className="h-8 w-8 text-axiom-bright" />
            <h3 className="mt-4 font-axiom text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}