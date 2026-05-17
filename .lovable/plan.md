
# Progetto Semi di Luce — Piano del sito

Costruisco un sito editoriale, mobile-first, in italiano, per Andrea Detommaso. 6 pagine collegate da un header/footer condivisi, una sola CTA dominante per sezione (oro), fotografie reali a tutta larghezza (placeholder generati con prompt mirati, da sostituire poi con foto vere).

## Approccio per fasi

Come richiesto: **prima costruisco solo la Home completa**, poi procediamo pagina per pagina nei turni successivi. In questa prima fase imposto anche il design system e il layout condiviso (header + footer) che serviranno a tutte le pagine.

## Fase 1 — Fondamenta + Home (questo turno)

### Design system (`src/styles.css`)
Token semantici in oklch:
- `--background` Avorio `#F5EFE2`
- `--foreground` Testo `#1A1510`
- `--primary` (CTA) Oro Luce `#C99C22`
- `--secondary` Notte `#14110E` (sezioni solenni)
- `--accent-nature` Verde terra `#5E6E54`
- `--accent-teal` Teal `#0DA5AB` (uso raro)
- Tipografia: Cormorant Garamond (display, italic per parole chiave), Jost (body, 17px, line-height 1.75)
- Spaziatura generosa, niente bordi marcati, divisori sottili

### Layout condiviso
- `src/routes/__root.tsx`: aggiorno meta sito-wide (lang it, og:type website, font preconnect a Google Fonts) e wrap con `<SiteHeader/>` + `<SiteFooter/>` attorno all'`<Outlet/>`
- `src/components/site-header.tsx`: logo testuale "Semi di Luce", nav minimale (Il Cammino · Chi sono · Esperienze · Scritti · Contatti), CTA oro "Scrivimi"
- `src/components/site-footer.tsx`: link orizzontali, contatti, copyright
- `src/components/sensory-divider.tsx`: divisore con micro-frase in corsivo
- `src/components/marquee-luoghi.tsx`: striscia scorrevole con nomi luoghi (Fiume Lao, Assisi, La Verna, Monte Sant'Angelo, Medjugorje…)

### Home (`src/routes/index.tsx`)
Sostituisco completamente il placeholder. Sezioni nell'ordine richiesto:
1. **Hero full-bleed** — immagine reale a tutta pagina, overlay notte, titolo Cormorant con "pratica", "Natura", "Luce" in corsivo oro; sottotitolo con presentazione di Andrea; CTA primaria oro "Scopri il Cammino" → `/il-cammino`
2. **Sezione-respiro** — fondo avorio, sola frase "Da certi luoghi non si arriva per caso, ma per chiamata interiore."
3. **Le tre porte** — 3 card grandi cliccabili (Pratica / Natura / Vie di Luce), tutte → `/il-cammino`, ognuna con immagine, numerale romano, titolo corsivo, microcopy
4. **Striscia "15 anni"** — eyebrow + marquee dei luoghi
5. **Estratto manifesto** — 3 punti numerati romani (I, II, III) su fondo avorio
6. **Divisore sensoriale**
7. **"Perché con me"** — fondo notte, testo in avorio, citazione integrale
8. **CTA finale** — testo + pulsante oro "Scrivimi" → `/contatti`

### Meta SEO Home
title "Andrea Detommaso — Progetto Semi di Luce", description specifica, H1 unico nell'hero, og:title/description coerenti, JSON-LD Person.

### Immagini
Genero 4–5 immagini di riferimento (hero, 3 porte, ritratto piccolo) con `imagegen` (fast), salvate in `src/assets/`, prompt mirati a fotografia documentaristica reale — nessuno stock spirituale, niente mani in controluce, cristalli o tramonti generici. Saranno facilmente sostituibili con foto vere di Andrea.

## Fase 2 — Pagine successive (turni futuri, una alla volta)
- `/il-cammino` — i tre pilastri estesi
- `/chi-sono` — biografia con le tre tappe
- `/esperienze` — calendario con filtri Pratica/Natura/Viaggi (dati statici inizialmente, struttura predisposta per prenotazione)
- `/scritti` — lista articoli + route dinamica `/scritti/$slug`
- `/contatti` — form qualificante + WhatsApp + telefono

Ogni pagina avrà il proprio `head()` con title/description/og dedicati e H1 unico.

## Dettagli tecnici
- TanStack Start file-based routing (route separate, niente hash anchor)
- Google Fonts caricati via `<link>` in `__root.tsx` head
- Tutte le immagini importate come asset Vite, `loading="lazy"` tranne hero, `alt` descrittivi
- Nessun backend in questa fase (form contatti arriverà con la pagina Contatti; valuteremo Lovable Cloud + invio email quando ci arriviamo)
- Niente librerie aggiuntive necessarie

## Cosa NON faccio (vincoli dal brief)
Niente stock spirituale, niente accumulo di simboli, niente maiuscole di enfasi, niente toni predicatori, niente pagine-isola per eventi, nessun riferimento a strumenti o terze parti.

Confermi e procedo con la Fase 1 (fondamenta + Home)?
