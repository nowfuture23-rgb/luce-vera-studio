import * as React from "react";
import {
  REVEAL_DURATION,
  REVEAL_DISTANCE,
  OBSERVER_THRESHOLD,
  EASING,
  PARALLAX_STRENGTH,
  prefersReducedMotion,
  isDesktopFinePointer,
} from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number; // ms
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  distance?: number;
  duration?: number;
};

/**
 * <Reveal> — wrapper SSR-safe. Al primo ingresso in viewport applica
 * una transizione opacity 0→1 + translateY(distance)→0. One-shot
 * (non si ri-trigger su uscita/rientro). Con prefers-reduced-motion:
 * reduce, rende children statici e completi, senza observer.
 *
 * Il testo è SEMPRE nel DOM da subito (solo la presentazione cambia).
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  distance = REVEAL_DISTANCE,
  duration = REVEAL_DURATION,
}: RevealProps) {
  const Tag = as as React.ElementType;
  const ref = React.useRef<HTMLElement | null>(null);
  // Default: visible (per SSR + reduce-motion). Diventa "hidden" solo
  // dopo il mount client se animazione consentita.
  const [state, setState] = React.useState<"visible" | "hidden">("visible");

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const t = window.setTimeout(() => setState("visible"), delay);
            io.disconnect();
            return () => window.clearTimeout(t);
          }
        }
      },
      { threshold: OBSERVER_THRESHOLD },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const style: React.CSSProperties = {
    transition: `opacity ${duration}ms ${EASING}, transform ${duration}ms ${EASING}`,
    opacity: state === "hidden" ? 0 : 1,
    transform: state === "hidden" ? `translate3d(0, ${distance}px, 0)` : "translate3d(0,0,0)",
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}

/**
 * <Parallax> — parallax verticale sottile su transform.
 * Solo desktop + pointer fine. Reduce-motion / mobile: nessun effetto.
 * Aggiornato via requestAnimationFrame, una sola RAF in volo per istanza.
 */
export function Parallax({
  children,
  strength = PARALLAX_STRENGTH,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!isDesktopFinePointer()) return;
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      // centro di el rispetto al centro viewport, normalizzato
      const offset = (rect.top + rect.height / 2 - viewportH / 2);
      const y = -offset * strength;
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    el.style.willChange = "transform";
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Hook per l'hero: ritorna `mounted` dopo il primo paint client.
 * Usato per il velo che si schiarisce e per scaglionare l'entrata
 * del testo hero. Con reduce-motion: ritorna true immediatamente.
 */
export function useHeroMount(): boolean {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    if (prefersReducedMotion()) {
      setMounted(true);
      return;
    }
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);
  return mounted;
}
