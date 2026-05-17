import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { abs } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { REVEAL_STAGGER } from "@/lib/motion";
import imgMeditazione from "@/assets/esperienza-meditazione.jpg";
import imgRaja from "@/assets/esperienza-raja.jpg";
import imgLao from "@/assets/esperienza-lao.jpg";
import imgBosco from "@/assets/esperienza-bosco.jpg";
import imgMedjugorje from "@/assets/esperienza-medjugorje.jpg";
import imgAssisi from "@/assets/esperienza-assisi.jpg";
import { AtmosphereHero } from "@/components/atmosphere-hero";
// SFONDO ATMOSFERA — generico evocativo, non contenuto specifico
import atmosEsperienze from "@/assets/atmos-esperienze.jpg";
import atmosCtaNotte from "@/assets/atmos-cta-notte.jpg";

export const Route = createFileRoute("/esperienze")({
  component: Esperienze,
  head: () => ({
    meta: [
      { title: "Esperienze — Progetto Semi di Luce" },
      {
        name: "description",
        content:
          "Corsi, ritiri e cammini lungo le tre vie del Progetto Semi di Luce: la Pratica, la Natura, le Vie di Luce. Filtra per via ed esplora il calendario.",
      },
      { property: "og:title", content: "Esperienze — Progetto Semi di Luce" },
      {
        property: "og:description",
        content:
          "Corsi, ritiri e cammini lungo le tre vie del Progetto Semi di Luce. Filtra per via ed esplora il calendario.",
      },
      { property: "og:url", content: abs("/esperienze") },
    ],
    links: [{ rel: "canonical", href: abs("/esperienze") }],
  }),
});

type Via = "La Pratica" | "La Natura" | "Le Vie di Luce";
type Filtro = "Tutte" | Via;

type Esperienza = {
  via: Via;
  titolo: string;
  senso: string;
  image: string;
  alt: string;
  /** IMMAGINE PROVVISORIA generata da AI — sostituire con foto reale */
  placeholder: true;
};

const esperienze: Esperienza[] = [
  {
    via: "La Pratica",
    titolo: "Corso di Meditazione — Fondamenti",
    senso: "I primi passi dentro il silenzio, con metodo e gentilezza.",
    image: imgMeditazione,
    alt: "Cuscino di meditazione in luce naturale del mattino",
    placeholder: true,
  },
  {
    via: "La Pratica",
    titolo: "Raja Yoga Avanzato",
    senso: "Approfondire la pratica per chi cammina già da tempo.",
    image: imgRaja,
    alt: "Libro aperto e candela in luce calda",
    placeholder: true,
  },
  {
    via: "La Natura",
    titolo: "Immersione al Fiume Lao",
    senso: "Acqua, bosco e respiro: la Natura come maestra diretta.",
    image: imgLao,
    alt: "Fiume che scorre in un bosco al mattino",
    placeholder: true,
  },
  {
    via: "La Natura",
    titolo: "Concerto nel Bosco",
    senso: "Suono, silenzio e alberi: una sera per ascoltare davvero.",
    image: imgBosco,
    alt: "Lanterne sospese tra gli alberi al crepuscolo",
    placeholder: true,
  },
  {
    via: "Le Vie di Luce",
    titolo: "Ritiro a Medjugorje",
    senso: "Un tempo raccolto in uno dei luoghi più viventi della Terra.",
    image: imgMedjugorje,
    alt: "Colline all'alba con foschia e luce calda",
    placeholder: true,
  },
  {
    via: "Le Vie di Luce",
    titolo: "Cammino di Assisi e La Verna",
    senso: "Passi, preghiera e pietra: l'Italia mistica a piedi.",
    image: imgAssisi,
    alt: "Sentiero in pietra tra cipressi al tramonto",
    placeholder: true,
  },
];

const filtri: Filtro[] = ["Tutte", "La Pratica", "La Natura", "Le Vie di Luce"];

const faq: { q: string; a: string }[] = [
  {
    q: "Come funziona l'iscrizione a un corso o a un ritiro?",
    a: "Si parte sempre da un contatto diretto. Mi scrivi, capiamo insieme se l'esperienza è giusta per te in questo momento, e da lì organizziamo l'iscrizione. Non c'è un carrello anonimo: ogni percorso inizia da una conversazione.",
  },
  {
    q: "Serve esperienza precedente per partecipare?",
    a: "Dipende dall'esperienza. I corsi di fondamenti sono pensati per chi parte da zero; alcuni percorsi avanzati richiedono una pratica già avviata. Se non sei sicuro, chiedimelo: ti dico con onestà se è il momento giusto.",
  },
  {
    q: "I ritiri e i cammini sono adatti a tutti?",
    a: "Sono esperienze aperte ma non leggere: chiedono presenza e disponibilità interiore. Non serve essere atleti né esperti di spiritualità. Serve la volontà sincera di esserci davvero. Per ogni ritiro ti spiego prima cosa aspettarti.",
  },
  {
    q: "Quanto costano le esperienze?",
    a: "Ogni esperienza ha un suo contributo, che ti comunico in fase di contatto insieme a tutti i dettagli pratici. Il prezzo dipende da durata, luogo e tipo di percorso.",
  },
  {
    q: "Dove si svolgono?",
    a: "Dipende dall'esperienza: alcuni corsi sono ricorrenti, i cammini e i ritiri si tengono nei luoghi che fanno parte del percorso — dal Fiume Lao ai luoghi di Luce come Assisi, La Verna, Medjugorje. Il luogo preciso è sempre indicato per ogni data.",
  },
  {
    q: "Posso proporti un'esperienza per un gruppo già formato?",
    a: "Sì. Se hai un gruppo — un'associazione, un cerchio, una realtà già esistente — possiamo costruire un'esperienza dedicata. Scrivimi e ne parliamo.",
  },
];

function Esperienze() {
  const [attivo, setAttivo] = useState<Filtro>("Tutte");
  const visibili =
    attivo === "Tutte" ? esperienze : esperienze.filter((e) => e.via === attivo);

  return (
    <>
      {/* HERO con SFONDO ATMOSFERA */}
      <AtmosphereHero
        image={atmosEsperienze}
        alt="Atmosfera di sentiero nel bosco in controluce dorato"
        tone="scuro"
        eager
        minH="min-h-[60svh]"
        className="pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            Esperienze
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-[var(--avorio)] md:text-7xl">
            Dove il cammino si fa{" "}
            <span className="italic-oro">esperienza</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-[var(--avorio)]/85 md:text-2xl">
            Corsi, ritiri e cammini. Filtra per via o scorri il calendario:
            ogni esperienza è una porta dentro la stessa Via.
          </p>
        </div>
      </AtmosphereHero>

      {/* FILTRO */}
      <section className="bg-[var(--avorio)] pb-10">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filtri.map((f) => {
              const active = f === attivo;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setAttivo(f)}
                  aria-pressed={active}
                  className={
                    "rounded-full border px-5 py-2 text-sm tracking-wide transition-colors " +
                    (active
                      ? "border-[var(--oro)] bg-[var(--oro)] text-[var(--notte)]"
                      : "border-[var(--notte)]/25 bg-transparent text-foreground/75 hover:border-[var(--oro)] hover:text-[var(--oro)]")
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
          <p className="mt-8 text-center font-display text-base italic text-foreground/55">
            Schede di esempio — contenuti reali in arrivo.
          </p>
        </div>
      </section>

      {/* GRIGLIA */}
      <section className="bg-[var(--avorio)] pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibili.map((e, i) => (
              <Reveal key={`${e.titolo}-${i}`} delay={Math.min(i, 7) * REVEAL_STAGGER}>
              <Card
                className="flex h-full flex-col overflow-hidden rounded-none border border-[var(--notte)]/10 bg-[var(--avorio)] shadow-none"
              >
                {/* IMMAGINE PROVVISORIA — generata da AI, sostituire con foto reale */}
                <div className="media-frame media-frame-hover relative aspect-[4/3] w-full overflow-hidden bg-[var(--notte)]/10">
                  <img
                    src={e.image}
                    alt={e.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                  <span className="media-badge absolute left-3 top-3 bg-[var(--avorio)]/90 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-[var(--notte)]/70">
                    immagine provvisoria
                  </span>
                </div>

                <CardContent className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--oro)]">
                    {e.via}
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-snug md:text-[1.65rem]">
                    {e.titolo}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {e.senso}
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.22em] text-foreground/55">
                    Luogo da definire · durata da definire · data da definire
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-foreground/55">
                    Prezzo: da definire
                  </p>
                  <div className="mt-6 flex-1" />
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit rounded-none border-[var(--notte)]/30 bg-transparent text-[var(--notte)] hover:bg-[var(--notte)] hover:text-[var(--avorio)]"
                  >
                    <Link to="/contatti">Scopri</Link>
                  </Button>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Reveal as="section" className="bg-[var(--avorio)] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
              Domande
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Prima di <span className="italic-oro">scrivermi</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-14">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-[var(--notte)]/15"
              >
                <AccordionTrigger className="py-6 font-display text-xl leading-snug text-foreground md:text-2xl hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0 text-base leading-relaxed text-foreground/80 md:text-[1.05rem]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>

      {/* PRENOTAZIONI — predisposizione */}
      <Reveal as="section" className="bg-[var(--avorio)] pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            Prenotazioni
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Come si prenota
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Per ora ogni esperienza si prenota scrivendomi direttamente: ti
            rispondo io, valutiamo insieme e ti guido all'iscrizione. Presto
            questa sezione ospiterà la prenotazione e il pagamento online,
            esperienza per esperienza.
          </p>
          {/* PUNTO DI AGGANCIO: qui andrà il sistema di prenotazione/pagamento per esperienza — vedi array `esperienze` */}
          <div className="mt-8">
            <Link
              to="/contatti"
              className="text-sm uppercase tracking-[0.25em] text-[var(--notte)]/70 underline decoration-[var(--oro)]/60 decoration-1 underline-offset-[6px] transition-colors hover:text-[var(--oro)]"
            >
              Scrivimi
            </Link>
          </div>
        </div>
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
            Non trovi quello che cerchi?{" "}
            <span className="italic-oro">Scrivimi</span>
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