import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-earth">
      {/* Orbit dekoratif */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[520px] w-[520px] bg-orbit-glow rounded-full">
          <div className="orbit-ring inset-0" />
          <div className="orbit-ring inset-8" style={{ animationDuration: "32s" }} />
          <div className="orbit-ring inset-16" style={{ animationDuration: "40s" }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        <span className="inline-block rounded-full border border-axiom-bright/40 bg-axiom-bright/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-axiom-bright">
          Technology for a Safer Tomorrow
        </span>
        <h1 className="mt-6 font-axiom text-4xl md:text-6xl font-bold leading-tight">
          Precision in Every Beam.<br />
          <span className="text-axiom-bright">Safety in Every Process.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-white/80">
          Solusi iradiasi andal untuk industri yang lebih sehat, aman, dan berkelanjutan.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/kontak"
            className="rounded-full bg-axiom-bright px-7 py-3 font-semibold text-axiom-dark hover:bg-white transition"
          >
            Ajukan Penawaran
          </Link>
          <Link
            href="/simulator"
            className="rounded-full border border-axiom-bright/60 px-7 py-3 font-semibold text-axiom-bright hover:bg-axiom-bright/10 transition"
          >
            Coba Simulator
          </Link>
        </div>
      </div>
    </section>
  );
}