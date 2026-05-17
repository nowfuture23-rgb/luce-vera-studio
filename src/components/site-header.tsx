import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 48);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-[250ms] ${
        scrolled
          ? "bg-[var(--notte)]/85 supports-[backdrop-filter]:backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link to="/" className="font-display text-xl tracking-wide text-[var(--avorio)] md:text-2xl">
          Semi <span className="italic-oro">di Luce</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm tracking-wide text-[var(--avorio)]/85 transition-colors hover:text-[var(--oro)]"
              activeProps={{ className: "text-[var(--oro)]" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Apri menù"
          onClick={() => setOpen((v) => !v)}
          className="text-[var(--avorio)] md:hidden"
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