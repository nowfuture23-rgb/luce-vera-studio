const luoghi = [
  "Fiume Lao",
  "Assisi",
  "La Verna",
  "Monte Sant'Angelo",
  "Medjugorje",
  "Manduria",
  "Sila",
  "Gargano",
];

export function MarqueeLuoghi() {
  const items = [...luoghi, ...luoghi];
  return (
    <div className="overflow-hidden border-y border-[var(--oro)]/25 bg-[var(--avorio)] py-8">
      <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap">
        {items.map((l, i) => (
          <span
            key={i}
            className="font-display text-2xl italic text-foreground/70 md:text-3xl"
          >
            {l}
            <span className="ml-16 text-[var(--oro)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}