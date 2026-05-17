import * as React from "react";

/**
 * SealMark — filigrana decorativa astratta (cerchi concentrici/irradiazione)
 * evocativa del concetto "seme di Luce". NON è un logo: è una forma
 * geometrica usata come watermark dietro le sezioni-cerniera.
 *
 * Uso: posizionata via className dal chiamante (es. absolute, opacità bassa,
 * z-index sotto il contenuto, parzialmente in bleed).
 */
export function SealMark({
  className,
  tone = "oro",
  ariaHidden = true,
}: {
  className?: string;
  tone?: "oro" | "notte";
  ariaHidden?: boolean;
}) {
  const stroke = tone === "oro" ? "var(--oro)" : "var(--notte)";
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      <g fill="none" stroke={stroke} strokeWidth="0.6">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="78" />
        <circle cx="100" cy="100" r="58" />
        <circle cx="100" cy="100" r="38" />
        <circle cx="100" cy="100" r="20" strokeWidth="0.8" />
      </g>
      <g stroke={stroke} strokeWidth="0.4" opacity="0.7">
        <line x1="100" y1="4" x2="100" y2="40" />
        <line x1="100" y1="160" x2="100" y2="196" />
        <line x1="4" y1="100" x2="40" y2="100" />
        <line x1="160" y1="100" x2="196" y2="100" />
      </g>
      <circle cx="100" cy="100" r="6" fill={stroke} />
    </svg>
  );
}