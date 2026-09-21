import { Radiation, Zap, Waves } from "lucide-react";

const services = [
  {
    icon: Radiation,
    title: "Gamma Co-60 / Cs-137",
    desc: "Penetrasi tinggi untuk produk padat & densitas tinggi.",
  },
  {
    icon: Zap,
    title: "Electron Beam",
    desc: "Dosis tinggi cepat, cocok untuk sterilisasi permukaan & volume sedang.",
  },
  {
    icon: Waves,
    title: "X-ray",
    desc: "Penetrasi dalam dengan fleksibilitas proses, tanpa sumber radioaktif.",
  },
];

export default function ServicesSummary() {
  return (
    <section className="bg-white/5 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-axiom text-3xl md:text-4xl font-bold text-center">
          Layanan <span className="text-axiom-bright">Iradiasi</span>
        </h2>
        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
          Tiga teknologi iradiasi utama untuk farmasi, alkes, pangan, dan kosmetik.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-axiom-dark p-8 hover:border-axiom-bright/60 transition"
            >
              <Icon className="h-9 w-9 text-axiom-bright" />
              <h3 className="mt-5 font-axiom text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}