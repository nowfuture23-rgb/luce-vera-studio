import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";

const navItems = [
  { to: "/il-cammino", label: "Il Cammino" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/esperienze", label: "Esperienze" },
  { to: "/scritti", label: "Scritti" },
  { to: "/testimonianze", label: "Testimonianze" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const heroScuro = location.pathname === "/";
  const logoColor = heroScuro ? "text-background" : "text-[var(--notte)]";
  const navColor = heroScuro
    ? "text-background/85"
    : "text-[var(--notte)]/75";
  const mobileBtnColor = heroScuro ? "text-background" : "text-[var(--notte)]";
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link to="/" className={`font-display text-xl tracking-wide ${logoColor} md:text-2xl`}>
          Semi <span className="italic-oro">di Luce</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className={`text-sm tracking-wide ${navColor} transition-colors hover:text-[var(--oro)]`}
              activeProps={{ className: "text-[var(--oro)]" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Apri menù"
          onClick={() => setOpen((v) => !v)}
          className={`${mobileBtnColor} md:hidden`}
        >
          <span className="block h-px w-7 bg-current" />
          <span className="mt-1.5 block h-px w-7 bg-current" />
          <span className="mt-1.5 block h-px w-5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="bg-[var(--notte)] px-6 pb-8 md:hidden">
          <nav className="flex flex-col gap-5">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-background"
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}