import { SealMark } from "@/components/seal-mark";

export function SensoryDivider({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-[var(--avorio)] py-20 md:py-32">
      {/* Filigrana brand: astratta, in bleed, sotto il contenuto. */}
      <SealMark
        tone="oro"
        className="pointer-events-none absolute -right-24 -top-24 z-0 h-[420px] w-[420px] opacity-[0.05] md:-right-32 md:h-[560px] md:w-[560px]"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-10 h-px w-16 bg-[var(--oro)]/60" />
        <p className="font-display text-2xl italic leading-relaxed text-foreground/80 md:text-3xl">
          {children}
        </p>
        <div className="mx-auto mt-10 h-px w-16 bg-[var(--oro)]/60" />
      </div>
    </div>
  );
}