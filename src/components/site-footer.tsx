import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--notte)] text-[var(--avorio)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-3xl leading-tight md:text-4xl">
              Progetto <span className="italic-oro">Semi di Luce</span>
            </p>
            <p className="mt-4 text-sm text-[var(--avorio)]/70">
              Andrea Detommaso — Meditazione, Raja Yoga, Vie di Luce.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link to="/il-cammino" className="hover:text-[var(--oro)]">Il Cammino</Link>
            <Link to="/chi-sono" className="hover:text-[var(--oro)]">Chi sono</Link>
            <Link to="/esperienze" className="hover:text-[var(--oro)]">Esperienze</Link>
            <Link to="/scritti" className="hover:text-[var(--oro)]">Scritti</Link>
            <Link to="/contatti" className="hover:text-[var(--oro)]">Contatti</Link>
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--avorio)]/15 pt-8 text-xs text-[var(--avorio)]/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Andrea Detommaso · Progetto Semi di Luce</p>
          <p>Tutto ciò che è qui, è stato prima attraversato.</p>
        </div>
      </div>
    </footer>
  );
}