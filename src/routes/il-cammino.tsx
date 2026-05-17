import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/il-cammino")({
  component: () => (
    <div className="bg-[var(--avorio)] pt-40 pb-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-display text-4xl md:text-5xl">Il Cammino</h1>
        <p className="mt-6 text-foreground/70">In arrivo.</p>
      </div>
    </div>
  ),
  head: () => ({ meta: [{ title: "Il Cammino — Progetto Semi di Luce" }] }),
});