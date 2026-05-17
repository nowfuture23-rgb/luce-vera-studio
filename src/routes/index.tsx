import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cammino.jpg";
import porta1 from "@/assets/porta-pratica.jpg";
import porta2 from "@/assets/porta-natura.jpg";
import porta3 from "@/assets/porta-vie.jpg";
import { MarqueeLuoghi } from "@/components/marquee-luoghi";
import { SensoryDivider } from "@/components/sensory-divider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Andrea Detommaso — Progetto Semi di Luce" },
      {
        name: "description",
        content:
          "Una sola Via: pratica interiore, esperienza della Natura e luoghi di Luce. Meditazione, Raja Yoga e cammini guidati con Andrea Detommaso.",
      },
      { property: "og:title", content: "Andrea Detommaso — Progetto Semi di Luce" },
      {
        property: "og:description",
        content:
          "Una sola Via: pratica interiore, Natura e luoghi di Luce. Quindici anni di insegnamento.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Andrea Detommaso",
          jobTitle: "Insegnante di Meditazione e Raja Yoga",
          description:
            "Fondatore di Progetto Semi di Luce. Accompagna persone attraverso pratica interiore, Natura e luoghi sacri.",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--notte)] text-[var(--avorio)]">
        <img
          src={heroImg}
          alt="Andrea Detommaso in meditazione all'alba sul Fiume Lao"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--notte)]/70 via-[var(--notte)]/40 to-[var(--notte)]/85" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
          <h1 className="max-w-4xl font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            C'è un cammino che non si fa con la testa.
            <br className="hidden sm:block" />{" "}
            Si fa con la <span className="italic-oro">pratica</span>, con la{" "}
            <span className="italic-oro">Natura</span>, e nei luoghi dove la{" "}
            <span className="italic-oro">Luce</span> è più vicina.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--avorio)]/85 md:text-lg">
            Mi chiamo Andrea Detommaso. Da quindici anni accompagno persone a
            uscire dalla sofferenza e a riconoscere, dentro di sé, qualcosa di
            più grande dell'ego. Non insegno una tecnica. Custodisco una Via.
          </p>
          <div className="mt-10">
            <Link
              to="/il-cammino"
              className="inline-flex items-center gap-3 border border-[var(--oro)] bg-[var(--oro)] px-8 py-4 text-sm uppercase tracking-[0.18em] text-[var(--notte)] transition-all hover:bg-transparent hover:text-[var(--oro)]"
            >
              Scopri il Cammino
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SEZIONE RESPIRO 1 */}
      <SensoryDivider>
        Da certi luoghi non si arriva per caso, ma per chiamata interiore.
      </SensoryDivider>

      {/* LE TRE PORTE */}
      <section className="bg-[var(--avorio)] pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--oro)]">
              Le tre porte
            </p>
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              Una sola Via, <span className="italic-oro">tre soglie</span> da
              cui entrare.
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                roman: "I",
                titolo: "La Pratica",
                img: porta1,
                alt: "Meditazione di gruppo in una sala in legno",
                testo:
                  "Meditazione e Raja Yoga. Il lavoro quotidiano che cambia, da dentro, il modo in cui vivi tutto il resto.",
              },
              {
                roman: "II",
                titolo: "La Natura",
                img: porta2,
                alt: "Cammino a piedi nudi in una faggeta",
                testo:
                  "Il Libro della Natura vissuto: immersioni, cammini, il suono delle piante. Dove la pratica diventa esperienza.",
              },
              {
                roman: "III",
                titolo: "Le Vie di Luce",
                img: porta3,
                alt: "Sentiero in pietra verso un santuario al tramonto",
                testo:
                  "I viaggi dell'anima nei luoghi sacri. Là dove il cammino accelera e il cuore ricorda la strada.",
              },
            ].map((p) => (
              <Link
                key={p.roman}
                to="/il-cammino"
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--notte)]">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    width={1080}
                    height={1440}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--notte)]/80 via-transparent to-transparent" />
                  <span className="absolute top-6 left-6 font-display text-3xl italic text-[var(--oro)] md:text-4xl">
                    {p.roman}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl italic text-foreground transition-colors group-hover:text-[var(--oro)] md:text-4xl">
                  {p.titolo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                  {p.testo}
                </p>
                <span className="mt-5 inline-block text-xs uppercase tracking-[0.2em] text-[var(--oro)]">
                  Entra →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STRISCIA 15 ANNI */}
      <section className="bg-[var(--avorio)] pb-6">
        <div className="mx-auto max-w-7xl px-6 pb-10 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--oro)]">
            Quindici anni — i luoghi del cammino
          </p>
        </div>
        <MarqueeLuoghi />
      </section>

      {/* MANIFESTO */}
      <section className="bg-[var(--avorio)] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--oro)]">
            Manifesto
          </p>
          <h2 className="mb-16 font-display text-3xl leading-tight md:text-5xl">
            Tre passaggi, <span className="italic-oro">un solo movimento</span>.
          </h2>
          <ol className="space-y-14">
            {[
              {
                n: "I",
                t: "La pratica viene prima.",
                d: "Non c'è esperienza che tenga senza un lavoro quotidiano. Meditazione e Raja Yoga sono il terreno: tutto il resto cresce da lì.",
              },
              {
                n: "II",
                t: "La Natura non è scenografia.",
                d: "È un Libro che parla a chi sa ascoltarlo. Camminare, sedersi, respirare in certi luoghi è già un insegnamento — se ci sei davvero.",
              },
              {
                n: "III",
                t: "Certi luoghi accelerano il cammino.",
                d: "Non sono mete turistiche. Sono soglie. Andarci insieme, con la giusta preparazione, può cambiare ciò che dentro era già pronto a muoversi.",
              },
            ].map((p) => (
              <li key={p.n} className="flex gap-8 md:gap-12">
                <span className="shrink-0 font-display text-4xl italic text-[var(--oro)] md:text-5xl">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-snug md:text-3xl">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-foreground/75">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIVISORE SENSORIALE */}
      <SensoryDivider>
        Si cammina insieme un tratto, poi ciascuno torna alla propria vita —
        diverso.
      </SensoryDivider>

      {/* PERCHÉ CON ME */}
      <section className="bg-[var(--notte)] py-24 text-[var(--avorio)] md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--oro)]">
            Perché con me
          </p>
          <p className="font-display text-2xl leading-[1.4] md:text-4xl">
            Non sono arrivato ieri. Pratico da quando ne avevo{" "}
            <span className="italic-oro">diciannove</span>, mi sono formato per
            anni prima di insegnare, e da allora non ho fatto altro. Quello che
            condivido, <span className="italic-oro">l'ho prima attraversato</span>.
          </p>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-[var(--avorio)] py-28 md:py-40">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            Se qualcosa, in queste parole, ha riconosciuto{" "}
            <span className="italic-oro">qualcosa in te</span> — non è un caso.
          </h2>
          <p className="mt-6 text-lg text-foreground/75">
            Vediamo da dove puoi iniziare.
          </p>
          <div className="mt-12">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-3 border border-[var(--oro)] bg-[var(--oro)] px-10 py-4 text-sm uppercase tracking-[0.18em] text-[var(--notte)] transition-all hover:bg-transparent hover:text-[var(--oro)]"
            >
              Scrivimi
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
