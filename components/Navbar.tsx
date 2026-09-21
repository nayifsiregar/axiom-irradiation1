import Link from "next/link";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "About Us" },
  { href: "/layanan", label: "Layanan" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/simulator", label: "Simulator" },
  { href: "/riset", label: "Riset" },
  { href: "/dasar-hukum", label: "Dasar Hukum" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-axiom-dark/70">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-axiom-bright/60" />
            <span className="font-axiom font-bold text-axiom-bright text-lg">A</span>
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-axiom-bright shadow-glow" />
          </span>
          <span className="leading-tight">
            <span className="block font-axiom font-bold tracking-wide">AXIOM</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-axiom-gray">
              Irradiation Technologies
            </span>
          </span>
        </Link>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-white/80">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-axiom-bright transition">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/kontak"
          className="rounded-full bg-axiom-bright px-5 py-2 text-sm font-semibold text-axiom-dark hover:bg-white transition"
        >
          Ajukan Penawaran
        </Link>
      </nav>
    </header>
  );
}