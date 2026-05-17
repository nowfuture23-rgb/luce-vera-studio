import { createFileRoute, Link } from "@tanstack/react-router";
import ritratto from "@/assets/andrea-ritratto.jpg";
import { SensoryDivider } from "@/components/sensory-divider";
import { MarqueeLuoghi } from "@/components/marquee-luoghi";
import { abs } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { REVEAL_STAGGER } from "@/lib/motion";
import { SealMark } from "@/components/seal-mark";
import { AtmosphereHero } from "@/components/atmosphere-hero";
// SFONDO ATMOSFERA — generico evocativo, non contenuto specifico
import atmosChiSono from "@/assets/atmos-chi-sono.jpg";
import atmosCtaNotte from "@/assets/atmos-cta-notte.jpg";

export const Route = createFileRoute("/chi-sono")({
  component: ChiSono,
  head: () => ({
    meta: [
      { title: "Chi sono — Progetto Semi di Luce" },
      {
        name: "description",
        content:
          "Andrea Detommaso: insegnante di Meditazione e Raja Yoga. Dalla ricerca interiore alla trasmissione quotidiana della pratica, in tre tappe.",
      },
      { property: "og:title", content: "Chi sono — Progetto Semi di Luce" },
      {
        property: "og:description",
        content:
          "Quindici anni di pratica e insegnamento. Il percorso di Andrea Detommaso, in tre tappe.",
      },
      { property: "og:url", content: abs("/chi-sono") },
    ],
    links: [{ rel: "canonical", href: abs("/chi-sono") }],
  }),
});

type Tappa = { eyebrow: string; title: string; body: string };

const tappe: Tappa[] = [
  {
    eyebrow: "L'inizio",
    title: "Manduria, 1987",
    body:
      "Da bambino mi tormentava il «perché» delle cose; da ragazzo quel perché mi ha portato dentro la psicologia, la spiritualità, la ricerca interiore. A diciannove anni sono entrato in una scuola di formazione per terapeuti, e in parallelo ho studiato quattro anni di naturopatia psicosomatica: volevo capire l'essere umano per intero, non a pezzi.",
  },
  {
    eyebrow: "La scelta",
    title: "2010",
    body:
      "Mi sono diplomato e sono diventato insegnante di Meditazione e Raja Yoga. Avrei potuto fare altro. Ho scelto di dedicare il mio tempo intero a una cosa sola: trasmettere la pratica e accompagnare chi cerca. Da allora ho continuato a formarmi — perché chi guida deve restare, prima di tutto, qualcuno che cammina.",
  },
  {
    eyebrow: "Cosa faccio davvero",
    title: "Quindici anni dopo",
    body:
      "Ho accompagnato migliaia di persone a ritrovare il proprio benessere, a conoscersi più a fondo, a smettere di identificarsi con la sofferenza per riconoscersi nella parte migliore di sé. Lo faccio in tre modi, che per me sono uno solo: trasmettendo l'arte della meditazione, portando le persone in Natura, accompagnandole nei luoghi di Luce della Terra.",
  },
];

function ChiSono() {
  return (
    <>
      {/* HERO con ritratto + SFONDO ATMOSFERA */}
      <AtmosphereHero
        image={atmosChiSono}
        alt="Atmosfera di luce calda da finestra in stanza silenziosa"
        tone="chiaro"
        eager
        minH="min-h-[60svh]"
        className="pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <div className="media-frame relative aspect-[4/5] w-full overflow-hidden bg-[var(--notte)]/10">
            {/* IMMAGINE PROVVISORIA — placeholder ritratto, da sostituire con foto reale di Andrea */}
            <img
              src={ritratto}
              alt="Ritratto di Andrea Detommaso"
              width={896}
              height={1120}
              className="h-full w-full object-cover"
            />
            <span className="media-badge absolute bottom-3 left-3 rounded-sm bg-[var(--notte)]/60 px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--avorio)]/80">
              immagine provvisoria
            </span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
              Chi sono
            </p>
            <h1 className="mt-8 font-display text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
              Non ho scelto questo lavoro. L'ho{" "}
              <span className="italic-oro">seguito</span>.
            </h1>
            <p className="mt-8 font-display text-xl italic leading-relaxed text-foreground/70 md:text-2xl">
              L'ho seguito, finché è diventato l'unica cosa che avesse senso fare.
            </p>
          </div>
        </div>
      </AtmosphereHero>

      {/* LE TRE TAPPE */}
      <section className="relative overflow-hidden bg-[var(--avorio)] pb-24 md:pb-32">
        <SealMark
          tone="oro"
          className="pointer-events-none absolute -right-44 top-24 z-0 h-[520px] w-[520px] opacity-[0.06] md:h-[700px] md:w-[700px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 md:pt-32">
          <div className="flex flex-col gap-20 md:gap-28">
            {tappe.map((t, i) => (
              <Reveal as="article" key={t.title} delay={i * REVEAL_STAGGER}>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
                  {t.eyebrow}
                </p>
                <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">
                  {t.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                  {t.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULL-QUOTE via SensoryDivider */}
      <Reveal>
        <SensoryDivider>
          Si possono capire, aiutare e amare gli altri solo nella misura in cui si capisce, si aiuta e si ama se stessi.
        </SensoryDivider>
      </Reveal>

      {/* MARQUEE LUOGHI */}
      <Reveal>
        <MarqueeLuoghi />
      </Reveal>

      {/* CTA FINALE — notte arricchita da SFONDO ATMOSFERA scuro */}
      <Reveal as="section" className="notte-aura relative overflow-hidden bg-[var(--notte)] py-16 text-[var(--avorio)] md:py-20">
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
            Se è questo che cerchi, siamo nel posto{" "}
            <span className="italic-oro">giusto</span>
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
