/**
 * motion.ts — parametri centralizzati per gli effetti esperienziali.
 *
 * Intensità approvata: "marcata ma cinematografica".
 * Movimenti calmi, decelerati, percepibili come respiro e profondità,
 * mai come animazioni vistose. Per propagare la stessa identità alle
 * altre pagine, riusare questo file (cambiare i valori qui = cambiare
 * il "quanto wow" ovunque, senza toccare i componenti).
 */

export const REVEAL_DURATION = 1000; // ms
export const REVEAL_DISTANCE = 28; // px di drift verticale
export const REVEAL_STAGGER = 120; // ms tra figli in sequenza
export const PARALLAX_STRENGTH = 0.12; // 0..1, sottile
export const OBSERVER_THRESHOLD = 0.15;
export const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

// Hero: velo iniziale che si schiarisce
export const HERO_VEIL_DURATION = 1400; // ms
export const HERO_TEXT_DELAY_AFTER_VEIL = 250; // ms

// Transizione di rotta (fade brevissimo)
export const ROUTE_FADE_DURATION = 280; // ms

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isDesktopFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
}
