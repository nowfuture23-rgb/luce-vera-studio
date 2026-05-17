import * as React from "react";

/**
 * <AtmosphereHero>
 * SFONDO ATMOSFERA — immagine generica evocativa (atmosphere: true).
 * NON è contenuto specifico: serve solo a dare materia al fondo dell'hero.
 * Velo gradiente sopra l'immagine garantisce contrasto WCAG AA del testo.
 */
export function AtmosphereHero({
  image,
  alt,
  children,
  tone = "scuro",
  className = "",
  minH = "min-h-[55svh] md:min-h-[60svh]",
  eager = false,
}: {
  image: string;
  alt: string;
  children: React.ReactNode;
  /** "scuro" = testo chiaro (velo notte); "chiaro" = testo scuro (velo avorio). */
  tone?: "scuro" | "chiaro";
  className?: string;
  minH?: string;
  eager?: boolean;
}) {
  const isScuro = tone === "scuro";
  return (
    <section
      className={`relative w-full overflow-hidden ${minH} ${
        isScuro ? "bg-[#1a1a1a] text-[var(--avorio)]" : "bg-[var(--avorio)]"
      } ${className}`}
    >
      {/* SFONDO ATMOSFERA — generico evocativo, non contenuto specifico */}
      <img
        src={image}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Velo localizzato solo nella fascia bassa, dove poggia il testo (contrasto AA) */}
      <div
        aria-hidden
        className={
          isScuro
            ? "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--notte)]/55"
            : "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--avorio)]/55"
        }
      />
      <div className="relative z-10 w-full [text-shadow:0_1px_2px_rgb(0_0_0_/_0.25)]">
        {children}
      </div>
    </section>
  );
}

/**
 * <AtmosphereBand>
 * Fascia intermedia full-bleed con immagine atmosfera + velo.
 * Spezza scroll lunghi senza inventare nuovo copy.
 */
export function AtmosphereBand({
  image,
  alt,
  children,
  tone = "scuro",
  className = "",
}: {
  image: string;
  alt: string;
  children?: React.ReactNode;
  tone?: "scuro" | "chiaro";
  className?: string;
}) {
  const isScuro = tone === "scuro";
  return (
    <section
      className={`relative w-full overflow-hidden ${
        isScuro ? "bg-[#1a1a1a] text-[var(--avorio)]" : "bg-[var(--avorio)]"
      } ${className}`}
    >
      {/* SFONDO ATMOSFERA — generico evocativo, non contenuto specifico */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 min-h-[36svh] flex items-center justify-center py-20 md:min-h-[44svh] md:py-28">
        {children ? (
          <div
            className={`max-w-3xl px-6 py-4 rounded-sm [text-shadow:0_1px_2px_rgb(0_0_0_/_0.25)] ${
              isScuro ? "bg-[var(--notte)]/55" : "bg-[var(--avorio)]/55"
            }`}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}