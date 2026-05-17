import { createFileRoute, Link } from "@tanstack/react-router";
import porta1 from "@/assets/porta-pratica.jpg";
import porta2 from "@/assets/porta-natura.jpg";
import porta3 from "@/assets/porta-vie.jpg";
import { SensoryDivider } from "@/components/sensory-divider";
import { abs } from "@/lib/site";
import { Reveal, Parallax } from "@/components/reveal";
import { REVEAL_STAGGER } from "@/lib/motion";
import { SealMark } from "@/components/seal-mark";
import { AtmosphereHero } from "@/components/atmosphere-hero";
// SFONDO ATMOSFERA — generico evocativo, non contenuto specifico
import atmosCammino from "@/assets/atmos-cammino.jpg";
import atmosCtaNotte from "@/assets/atmos-cta-notte.jpg";

export const Route = createFileRoute("/il-cammino")({
  component: IlCammino,
  head: () => ({
    meta: [
      { title: "Il Cammino — Progetto Semi di Luce" },
      {
        name: "description",
        content:
          "Una sola Via, in tre movimenti: Pratica, Natura e Vie di Luce. Il cammino di Andrea Detommaso.",
      },
      { property: "og:title", content: "Il Cammino — Progetto Semi di Luce" },
      {
        property: "og:description",
        content:
          "Meditazione, Natura e luoghi di Luce: lo stesso cammino visto da tre finestre.",
      },
      { property: "og:url", content: abs("/il-cammino") },
    ],
    links: [{ rel: "canonical", href: abs("/il-cammino") }],
  }),
});

type Pilastro = {
  numeral: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  /** IMMAGINE PROVVISORIA — sostituire con foto reale di Andrea */
  placeholder: true;
};

const pilastri: Pilastro[] = [
  {
    numeral: "I",
    title: "La Pratica",
    image: porta1,
    alt: "Persona in meditazione seduta, luce naturale",
    placeholder: true,
    body:
      "Meditazione e Raja Yoga. È la base: il lavoro interiore quotidiano, le fondamenta. I tre corsi, il Raja Yoga avanzato, la pratica che resta con te ogni giorno. Senza questa base, tutto il resto è solo turismo.",
  },
  {
    numeral: "II",
    title: "La Natura",
    image: porta2,
    alt: "Sentiero nel bosco lungo il Fiume Lao",
    placeholder: true,
    body:
      "Natura Alchemica Experience. Il Libro della Natura vissuto, non spiegato: immersioni, cammini, il Fiume Lao, i concerti nel bosco. La pratica esce dalla stanza ed entra nel mondo vivente.",
  },
  {
    numeral: "III",
    title: "Le Vie di Luce",
    image: porta3,
    alt: "Cammino di pellegrinaggio verso un luogo sacro",
    placeholder: true,
    body:
      "I Viaggi dell'Anima. I luoghi che accelerano il cammino — Monte Sant'Angelo, Assisi e La Verna, Medjugorje — letti come portali, non come pellegrinaggi turistici.",
  },
];

function IlCammino() {
  return (
    <>
      {/* HERO testuale con SFONDO ATMOSFERA */}
      <AtmosphereHero
        image={atmosCammino}
        alt="Atmosfera di sentiero in pietra tra la nebbia all'alba"
        tone="scuro"
        eager
        minH="min-h-[60svh]"
        className="pt-40 pb-24 md:pt-48 md:pb-32"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            Il Cammino
          </p>
          <h1 className="mt-8 font-display text-4xl leading-[1.1] text-[var(--avorio)] md:text-6xl">
            Una sola <span className="italic-oro">Via</span>, in tre movimenti
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--avorio)]/85 md:text-xl">
            Meditazione, Natura e luoghi di Luce non sono cose diverse. Sono lo
            stesso cammino, visto da tre finestre.
          </p>
        </div>
      </AtmosphereHero>

      {/* I TRE PILASTRI */}
      <section className="bg-[var(--avorio)] pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex flex-col gap-24 md:gap-40">
            {pilastri.map((p, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal
                  as="article"
                  key={p.numeral}
                  delay={i * REVEAL_STAGGER}
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Parallax className="media-frame relative aspect-[4/5] w-full overflow-hidden bg-[var(--notte)]/10">
                    {/* IMMAGINE PROVVISORIA — sostituire con foto reale */}
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="media-badge absolute bottom-3 left-3 rounded-sm bg-[var(--notte)]/60 px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--avorio)]/80">
                      immagine provvisoria
                    </span>
                  </Parallax>
                  <div>
                    <span className="block font-display text-7xl leading-none text-[var(--oro)] md:text-8xl">
                      {p.numeral}
                    </span>
                    <h2 className="mt-6 font-display text-3xl italic text-foreground md:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* UN SOLO MOVIMENTO */}
      <Reveal as="section" className="relative overflow-hidden bg-[var(--avorio)] pb-24 md:pb-32">
        <SealMark
          tone="oro"
          className="pointer-events-none absolute -right-32 -top-20 z-0 h-[480px] w-[480px] opacity-[0.08] md:h-[640px] md:w-[640px]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-12 h-px w-16 bg-[var(--oro)]/60" />
          <p className="font-display text-2xl leading-snug text-foreground md:text-4xl">
            La Pratica apre alla{" "}
            <span className="italic-oro">Natura</span>, la Natura conduce ai{" "}
            <span className="italic-oro">Viaggi</span>: un solo movimento, con
            un orizzonte — la Via della{" "}
            <span className="italic-oro">Coscienza Cristica</span>, intesa come
            direzione, non come dogma.
          </p>
          <div className="mx-auto mt-12 h-px w-16 bg-[var(--oro)]/60" />
        </div>
      </Reveal>

      {/* DIVISORE SENSORIALE */}
      <SensoryDivider>
        Tutto ciò che è qui, è stato prima attraversato.
      </SensoryDivider>

      {/* CTA FINALE — notte arricchita da SFONDO ATMOSFERA scuro */}
      <Reveal as="section" className="notte-aura relative overflow-hidden bg-[var(--notte)] py-24 text-[var(--avorio)] md:py-32">
        {/* SFONDO ATMOSFERA — generico evocativo, non contenuto specifico */}
        <img
          src={atmosCtaNotte}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[var(--notte)]/75" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Vediamo da dove puoi iniziare il tuo{" "}
            <span className="italic-oro">cammino</span>
          </h2>
          <div className="mt-10">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center border border-[var(--oro)] bg-[var(--oro)] px-10 py-4 text-sm uppercase tracking-[0.25em] text-[var(--notte)] transition-colors hover:bg-transparent hover:text-[var(--oro)]"
            >
              Scrivimi
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
