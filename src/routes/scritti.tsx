import { createFileRoute, Link } from "@tanstack/react-router";
import { scritti } from "@/lib/scritti";
import { abs } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { REVEAL_STAGGER } from "@/lib/motion";

export const Route = createFileRoute("/scritti")({
  component: ScrittiIndex,
  head: () => ({
    meta: [
      { title: "Scritti — Progetto Semi di Luce" },
      {
        name: "description",
        content:
          "Appunti, preparazioni e significati lungo il cammino. Gli scritti di Andrea Detommaso per chi cerca un passo lento e consapevole.",
      },
      { property: "og:title", content: "Scritti — Progetto Semi di Luce" },
      {
        property: "og:description",
        content:
          "Appunti, preparazioni e significati lungo il cammino. Gli scritti di Andrea Detommaso.",
      },
      { property: "og:url", content: abs("/scritti") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: abs("/scritti") }],
  }),
});

function ScrittiIndex() {
  return (
    <div className="bg-[var(--avorio)]">
      {/* Hero */}
      <Reveal as="section" className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            Scritti
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
            Pensieri lungo il <span className="italic-oro">cammino</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80 md:text-xl">
            Appunti, preparazioni, significati. Ciò che scrivo tra
            un'esperienza e l'altra, per chi cammina.
          </p>
        </div>
      </Reveal>

      {/* Riga di stato */}
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center font-display text-sm italic text-foreground/50">
          Articoli di esempio — i contenuti reali saranno pubblicati qui.
        </p>
      </div>

      {/* Lista editoriale */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ul className="divide-y divide-[var(--notte)]/15">
            {scritti.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={Math.min(i, 7) * REVEAL_STAGGER}>
                <Link
                  to="/scritti/$slug"
                  params={{ slug: s.slug }}
                  className="group block py-10 md:py-14"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--oro)]">
                    {s.categoria}
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-tight transition-colors group-hover:text-[var(--oro)] md:text-4xl">
                    {s.titolo}
                  </h2>
                  <p className="mt-3 font-display text-sm italic text-foreground/50">
                    {s.data}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
                    {s.estratto}
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.2em] text-foreground/60 transition-colors group-hover:text-[var(--oro)]">
                    Leggi
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
