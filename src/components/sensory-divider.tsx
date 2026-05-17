export function SensoryDivider({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--avorio)] py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-10 h-px w-16 bg-[var(--oro)]/60" />
        <p className="font-display text-2xl italic leading-relaxed text-foreground/80 md:text-3xl">
          {children}
        </p>
        <div className="mx-auto mt-10 h-px w-16 bg-[var(--oro)]/60" />
      </div>
    </div>
  );
}