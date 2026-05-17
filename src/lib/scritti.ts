export type Scritto = {
  slug: string;
  titolo: string;
  data: string;
  categoria: "La Pratica" | "La Natura" | "Le Vie di Luce";
  estratto: string;
};

export const scritti: Scritto[] = [
  {
    slug: "il-silenzio-non-e-vuoto",
    titolo: "Il silenzio non è vuoto",
    data: "Data da definire",
    categoria: "La Pratica",
    estratto:
      "Meditare non significa svuotare la mente, ma imparare ad ascoltare ciò che c'è già. Il silenzio, quando lo si attraversa davvero, parla.",
  },
  {
    slug: "camminare-come-pratica",
    titolo: "Camminare come pratica",
    data: "Data da definire",
    categoria: "La Natura",
    estratto:
      "Il passo lento è una forma di preghiera senza parole. Camminare nei boschi del Lao, lungo i sentieri, è una meditazione in movimento.",
  },
  {
    slug: "perche-i-luoghi-contano",
    titolo: "Perché certi luoghi contano",
    data: "Data da definire",
    categoria: "Le Vie di Luce",
    estratto:
      "Assisi, La Verna, Monte Sant'Angelo. Non sono mete da collezionare, ma soglie. Luoghi dove qualcosa, in chi arriva, si ricompone.",
  },
];

export function getScritto(slug: string): Scritto | undefined {
  return scritti.find((s) => s.slug === slug);
}