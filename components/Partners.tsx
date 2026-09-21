const partners = ["Farmasi", "Alkes", "Pangan", "Kosmetik", "Riset", "Pemerintah"];

export default function Partners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-axiom-gray">
        Dipercaya oleh sektor
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {partners.map((p) => (
          <span
            key={p}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70"
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}