import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SensoryDivider } from "@/components/sensory-divider";
import { getScritto, scritti } from "@/lib/scritti";
import { abs } from "@/lib/site";

export const Route = createFileRoute("/scritti/$slug")({
  component: ScrittoArticolo,
  loader: ({ params }) => {
    const scritto = getScritto(params.slug);
    if (!scritto) throw notFound();
    return { scritto };
  },
  notFoundComponent: () => (
    <div className="bg-[var(--avorio)] pt-40 pb-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
          Scritti
        </p>
        <h1 className="mt-6 font-display text-4xl md:text-5xl">
          Articolo non trovato
        </h1>
        <p className="mt-6 text-foreground/70">
          Lo scritto che cerchi non esiste o è stato spostato.
        </p>
        <Link
          to="/scritti"
          className="mt-10 inline-block text-sm uppercase tracking-[0.2em] text-[var(--oro)] underline decoration-[var(--oro)]/40 underline-offset-8 hover:decoration-[var(--oro)]"
        >
          Torna agli scritti
        </Link>
      </div>
    </div>
  ),
  head: ({ params }) => {
    const scritto = scritti.find((s) => s.slug === params.slug);
    const title = scritto
      ? `${scritto.titolo} — Progetto Semi di Luce`
      : "Scritto — Progetto Semi di Luce";
    const description = scritto?.estratto ?? "Scritti di Andrea Detommaso.";
    const url = abs(`/scritti/${params.slug}`);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
});

function ScrittoArticolo() {
  const { scritto } = Route.useLoaderData();

  return (
    <article className="bg-[var(--avorio)]">
      {/* Header articolo */}
      <header className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            {scritto.categoria}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            {scritto.titolo}
          </h1>
          <p className="mt-6 font-display text-sm italic text-foreground/50">
            {scritto.data}
          </p>
        </div>
      </header>

      {/* Corpo articolo */}
      <div className="pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <p className="font-display text-lg italic leading-relaxed text-foreground/60 md:text-xl">
            [Contenuto di esempio. Il testo reale di questo scritto sarà
            pubblicato qui.]
          </p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              {scritto.estratto} Questo paragrafo è un segnaposto: serve a
              mostrare la misura, il respiro e la leggibilità della pagina
              quando arriverà il testo definitivo.
            </p>
            <p>
              Lorem ipsum editoriale di servizio. Il contenuto reale di
              questo scritto verrà inserito al posto di questi paragrafi,
              mantenendo lo stesso ritmo e la stessa colonna di lettura.
            </p>
          </div>

          <h2 className="mt-14 font-display text-2xl leading-tight md:text-3xl">
            Un sottotitolo, per spezzare
          </h2>

          <div className="mt-6 space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              Altro paragrafo segnaposto. Qui troveranno spazio le idee
              centrali dello scritto: una riflessione alla volta, senza
              fretta, come si cammina.
            </p>
            <p>
              Chiusura provvisoria del corpo. Anche questa parte sarà
              sostituita con il testo definitivo.
            </p>
          </div>
        </div>
      </div>

      {/* Chiusura sensoriale */}
      <SensoryDivider>
        Si torna sempre al passo. È il passo che insegna.
      </SensoryDivider>

      {/* Invito discreto */}
      <div className="bg-[var(--avorio)] pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
            Se queste parole risuonano,{" "}
            <Link
              to="/esperienze"
              className="text-foreground underline decoration-[var(--oro)]/50 underline-offset-4 hover:decoration-[var(--oro)]"
            >
              c'è un'esperienza che le accompagna
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}