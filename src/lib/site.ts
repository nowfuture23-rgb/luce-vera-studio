// DA CONFERMARE: dominio ufficiale non ancora deciso (.com vs .it).
// Quando deciso, cambiare SOLO questa costante: tutti i canonical/OG si aggiornano.
export const SITE_URL = "https://www.progettosemidiluce.it";

export const abs = (path: string) =>
  `${SITE_URL}${path === "/" ? "" : path}`;
