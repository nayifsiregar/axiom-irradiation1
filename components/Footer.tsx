import { ShieldCheck, Target, Activity, Leaf } from "lucide-react";

const values = [
  { icon: Target, label: "Precision" },
  { icon: ShieldCheck, label: "Safety" },
  { icon: Activity, label: "Reliability" },
  { icon: Leaf, label: "A Safer Tomorrow" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-axiom-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-axiom text-xl font-bold">AXIOM Irradiation Technologies</h3>
          <p className="mt-3 text-sm text-white/70 max-w-md">
            Lebih dari sekadar teknologi, AXIOM adalah komitmen untuk masa depan yang lebih aman.
          </p>
          <p className="mt-4 text-xs text-axiom-gray">
            © {new Date().getFullYear()} AXIOM Irradiation Technologies. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="font-axiom text-sm uppercase tracking-widest text-axiom-bright">
            Nilai Inti
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {values.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-axiom-bright" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-axiom text-sm uppercase tracking-widest text-axiom-bright">
            Legal
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li><a href="/dasar-hukum" className="hover:text-axiom-bright">Dasar Hukum</a></li>
            <li><a href="/riset" className="hover:text-axiom-bright">Riset & Publikasi</a></li>
            <li><a href="/kontak" className="hover:text-axiom-bright">Kontak</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}