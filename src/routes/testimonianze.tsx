import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { testimonianze } from "@/lib/testimonianze";
import { abs } from "@/lib/site";
import { SealMark } from "@/components/seal-mark";
import { AtmosphereHero } from "@/components/atmosphere-hero";
// SFONDO ATMOSFERA — generico evocativo, non contenuto specifico
import atmosTestim from "@/assets/atmos-testimonianze.jpg";

export const Route = createFileRoute("/testimonianze")({
  component: TestimonianzePage,
  head: () => ({
    meta: [
      { title: "Testimonianze — Progetto Semi di Luce" },
      {
        name: "description",
        content:
          "Le parole di chi ha camminato accanto ad Andrea Detommaso nei percorsi di meditazione e Raja Yoga. Lettere raccolte negli anni, riportate come sono state scritte.",
      },
      { property: "og:title", content: "Testimonianze — Progetto Semi di Luce" },
      {
        property: "og:description",
        content:
          "Le parole di chi ha camminato. Lettere raccolte negli anni dai percorsi di meditazione e Raja Yoga.",
      },
      { property: "og:url", content: abs("/testimonianze") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: abs("/testimonianze") }],
  }),
});

function TestimonianzaItem({
  cite,
  estratto,
  testo,
}: {
  cite: string;
  estratto: string;
  testo: string;
}) {
  const [open, setOpen] = useState(false);
  const paragrafi = testo.split("\n\n");
  return (
    <article className="py-12 md:py-16">
      <blockquote>
        <p className="font-display text-xl leading-relaxed text-foreground/85 md:text-2xl">
          {estratto}
        </p>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent>
            <div className="mt-6 space-y-4">
              {paragrafi.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-foreground/75 md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <button
              type="button"
              className="mt-5 text-xs uppercase tracking-[0.25em] text-foreground/60 underline decoration-[var(--oro)]/60 decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--oro)]"
            >
              {open ? "Chiudi" : "Leggi tutto"}
            </button>
          </CollapsibleTrigger>
        </Collapsible>
        <footer className="mt-6">
          <cite className="font-display text-sm not-italic tracking-[0.15em] text-foreground/60">
            — {cite}
          </cite>
        </footer>
      </blockquote>
    </article>
  );
}

function TestimonianzePage() {
  const mid = Math.floor(testimonianze.length / 2);
  const primaParte = testimonianze.slice(0, mid);
  const secondaParte = testimonianze.slice(mid);
  return (
    <div className="bg-[var(--avorio)]">
      {/* Hero con SFONDO ATMOSFERA */}
      <AtmosphereHero
        image={atmosTestim}
        alt="Atmosfera di colline all'alba con foschia dorata"
        tone="scuro"
        eager
        minH="min-h-[60svh]"
        className="pt-32 pb-12 md:pt-40 md:pb-16"
      >
        <SealMark
          tone="oro"
          className="pointer-events-none absolute -left-32 -top-24 z-0 h-[460px] w-[460px] opacity-[0.08] md:h-[600px] md:w-[600px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            Testimonianze
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight text-[var(--avorio)] md:text-6xl">
            Le parole di chi ha <span className="italic-oro">camminato</span>
          </h1>
          <p className="mt-8 font-display text-lg italic leading-relaxed text-[var(--avorio)]/85 md:text-xl">
            Non recensioni. Lettere di chi ha fatto un tratto di strada. Le
            riporto come sono state scritte.
          </p>
        </div>
      </AtmosphereHero>

      {/* Riga di contesto */}
      <div className="mx-auto max-w-3xl px-6 pt-12">
        <p className="text-center font-display text-sm italic text-foreground/50">
          Testimonianze raccolte negli anni dai percorsi di meditazione e Raja
          Yoga.
        </p>
      </div>

      {/* Lista — prima parte */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <SealMark
          tone="oro"
          className="pointer-events-none absolute -right-40 top-1/2 z-0 h-[520px] w-[520px] -translate-y-1/2 opacity-[0.07] md:h-[700px] md:w-[700px]"
        />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <div className="divide-y divide-[var(--notte)]/10">
            {primaParte.map((t) => (
              <TestimonianzaItem
                key={t.id}
                cite={t.cite}
                estratto={t.estratto}
                testo={t.testo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lista — seconda parte */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <div className="divide-y divide-[var(--notte)]/10">
            {secondaParte.map((t) => (
              <TestimonianzaItem
                key={t.id}
                cite={t.cite}
                estratto={t.estratto}
                testo={t.testo}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}