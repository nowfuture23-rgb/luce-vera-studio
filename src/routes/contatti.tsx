import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contatti")({
  component: ContattiPage,
  head: () => ({
    meta: [
      { title: "Contatti — Progetto Semi di Luce" },
      {
        name: "description",
        content:
          "Scrivimi per iniziare una conversazione: ti rispondo personalmente. Form, WhatsApp, telefono ed email per il Progetto Semi di Luce.",
      },
      { property: "og:title", content: "Contatti — Progetto Semi di Luce" },
      {
        property: "og:description",
        content:
          "Ogni cammino parte da una conversazione. Raccontami dove sei: ti rispondo io, personalmente.",
      },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
});

const inputClass =
  "rounded-none border-[var(--notte)]/20 bg-transparent shadow-none focus-visible:ring-0 focus-visible:border-[var(--oro)]";

type Errors = Partial<Record<"nome" | "email" | "messaggio", string>>;

function ContattiPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provenienza, setProvenienza] = useState("");
  const [via, setVia] = useState("");
  const [evento, setEvento] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [confermato, setConfermato] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!nome.trim()) e.nome = "Inserisci il tuo nome.";
    if (!email.trim()) e.email = "Inserisci la tua email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      e.email = "Email non valida.";
    if (!messaggio.trim()) e.messaggio = "Scrivi un breve messaggio.";
    return e;
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    {
      /* PUNTO DI AGGANCIO: collegare qui l'invio reale (es. form action / endpoint email). Per ora solo conferma client-side. */
    }
    setNome("");
    setEmail("");
    setTelefono("");
    setProvenienza("");
    setVia("");
    setEvento("");
    setMessaggio("");
    setConfermato(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--avorio)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            Contatti
          </p>
          <h1 className="mt-8 font-display text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            Scrivimi: vediamo da dove{" "}
            <span className="italic-oro">iniziare</span>
          </h1>
          <p className="mt-8 font-display text-xl italic leading-relaxed text-foreground/70 md:text-2xl">
            Ogni cammino parte da una conversazione. Raccontami dove sei: ti rispondo io, personalmente.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[var(--avorio)] pb-24 md:pb-32">
        <div className="mx-auto max-w-xl px-6">
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                aria-invalid={!!errors.nome}
                className={inputClass}
              />
              {errors.nome && (
                <p className="text-sm text-foreground/70">{errors.nome}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={!!errors.email}
                className={inputClass}
              />
              {errors.email && (
                <p className="text-sm text-foreground/70">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="telefono">Telefono (opzionale)</Label>
              <Input
                id="telefono"
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="provenienza">Da dove mi conosci</Label>
              <Select value={provenienza} onValueChange={setProvenienza}>
                <SelectTrigger id="provenienza" className={inputClass}>
                  <SelectValue placeholder="Scegli un'opzione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram-facebook">Instagram / Facebook</SelectItem>
                  <SelectItem value="google">Una ricerca su Google</SelectItem>
                  <SelectItem value="passaparola">Passaparola</SelectItem>
                  <SelectItem value="evento-ritiro">Un evento o ritiro</SelectItem>
                  <SelectItem value="altro">Altro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="via">A quale via sei interessato</Label>
              <Select value={via} onValueChange={setVia}>
                <SelectTrigger id="via" className={inputClass}>
                  <SelectValue placeholder="Scegli un'opzione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pratica">La Pratica — Meditazione e Raja Yoga</SelectItem>
                  <SelectItem value="natura">La Natura — esperienze in natura</SelectItem>
                  <SelectItem value="vie-di-luce">Le Vie di Luce — viaggi dell'anima</SelectItem>
                  <SelectItem value="non-so">Non lo so ancora</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="evento">Evento di riferimento (opzionale)</Label>
              <Input
                id="evento"
                value={evento}
                onChange={(e) => setEvento(e.target.value)}
                placeholder="Se hai in mente un'esperienza specifica (facoltativo)"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="messaggio">Messaggio</Label>
              <Textarea
                id="messaggio"
                value={messaggio}
                onChange={(e) => setMessaggio(e.target.value)}
                required
                rows={6}
                placeholder="Raccontami brevemente dove ti trovi nel tuo cammino"
                aria-invalid={!!errors.messaggio}
                className={inputClass}
              />
              {errors.messaggio && (
                <p className="text-sm text-foreground/70">{errors.messaggio}</p>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full sm:w-auto rounded-none border border-[var(--oro)] bg-[var(--oro)] px-10 py-6 text-sm uppercase tracking-[0.25em] text-[var(--notte)] shadow-none transition-colors hover:bg-transparent hover:text-[var(--oro)]"
              >
                Invia il messaggio
              </Button>
            </div>

            {confermato && (
              <div
                role="status"
                className="border border-[var(--oro)]/60 bg-[var(--oro)]/10 px-6 py-5 text-foreground/85"
              >
                <p className="font-display text-lg italic leading-relaxed">
                  Grazie. Ho ricevuto il tuo messaggio: ti rispondo personalmente, di solito entro pochi giorni.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* RECAPITI DIRETTI */}
      <section className="bg-[var(--avorio)] border-t border-[var(--notte)]/10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--oro)]">
            Recapiti diretti
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-foreground md:text-4xl">
            Preferisci scrivere <span className="italic-oro">subito?</span>
          </h2>

          <dl className="mt-10 flex flex-col gap-8 text-lg">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                WhatsApp
              </dt>
              <dd className="mt-2">
                <a
                  href="https://wa.me/393292089972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-[var(--oro)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--oro)]"
                >
                  Scrivimi su WhatsApp
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                Telefono
              </dt>
              <dd className="mt-2">
                <a
                  href="tel:+393292089972"
                  className="text-foreground underline decoration-[var(--oro)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--oro)]"
                >
                  +39 329 208 9972
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                Email
              </dt>
              <dd className="mt-2">
                {/* DA CONFERMARE con Andrea: email pubblica ufficiale */}
                <a
                  href="mailto:progettosemidiluce@gmail.com"
                  className="text-foreground underline decoration-[var(--oro)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--oro)]"
                >
                  progettosemidiluce@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
