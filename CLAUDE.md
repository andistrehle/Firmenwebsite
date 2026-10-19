# Firmenwebsite Andreas Strehle & Dennis da Silva — Projekt-Briefing für Claude

Vertriebswebsite für Anwaltskanzleien (Einzelanwälte, kleine Kanzleien).
Die Seite muss Anfragen erzeugen und selbst beweisen, dass wir gute Websites
bauen.

**Zielgruppen-Struktur (Entscheidung Andreas, 19.10.2026):** Die Hero-Überschrift
spricht alle an (Mandanten, Kunden, Mitglieder). Direkt darunter eine Weiche mit
drei Kacheln (`AUDIENCES`). Die Startseite bleibt im Kern bei den Kanzleien,
Unternehmen und Vereine haben eigene Unterseiten (`/unternehmen`, `/vereine`,
Inhalte `PAGE_UNTERNEHMEN`/`PAGE_VEREINE`, Vorlage `components/pages/AudiencePage.tsx`).
Der Fokus kann sich später verschieben. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react.
Hosting auf Vercel, automatischer Deploy bei Push auf `main`.

Vorübergehende Marke: **„Stift & Server“** (19.10.2026). Verbindliche Quelle für
Logo, Farben und Schriften ist `brand/` (zuerst `brand/README.md` und
`brand/tokens.css` lesen). Domain stift-und-server.de ist noch nicht registriert.

## Architektur-Regeln

1. **Alle Texte** liegen als typisierte Datenobjekte in `lib/content.ts`.
   Komponenten rendern nur, sie enthalten keine Texte.
2. **Name, Claim, Domain, Kontakt, Impressumsträger** liegen in
   `lib/site-config.ts` (`BRAND`, `LEGAL_ENTITY`, `SITE`). Den Firmennamen
   niemals als Text in Inhalte, Metadaten oder Dateinamen schreiben, immer
   `BRAND.name` verwenden.
3. Base-Path aus `NEXT_PUBLIC_BASE_PATH`, Domain aus `NEXT_PUBLIC_SITE_URL`.
   Ein Domainwechsel kostet nur Konfiguration.
4. Farben und Typografie nur im `@theme`-Block in `app/globals.css`.
   Keine Hex-Werte in Komponenten.
5. Sektionen der Startseite unter `components/sections/`, Bausteine unter
   `components/ui/`. Client-Komponenten nur wo nötig (Header-Menü, Demo,
   Formular). Lighthouse und Core Web Vitals müssen grün bleiben.
6. Keine externen Ressourcen zur Laufzeit: Fonts über next/font (lokal
   ausgeliefert), kein Tracking, keine CDNs, keine Embeds (Loom, YouTube,
   Calendly). Videos selbst hosten, Terminbuchung nur verlinken.
   Ziel: kein Cookie-Banner nötig.
7. Mobile zuerst.

## Design

- **Marke `brand/` ist verbindlich.** Farben nur über die Variablen aus
  `brand/tokens.css`; `app/globals.css` reicht sie per `@theme inline` an Tailwind
  weiter (`surface`=`--grund`, `ink`=`--weiss`, `ink-soft`=`--text`,
  `ink-faint`=`--neben`, `copper`=`--kupfer`, `copper-lit`=`--kupfer-hell`,
  `copper-deep`=`--glut`, `line`=`--linie`, `line-strong`=`--linie-stark`,
  `on-copper`=`--auf-kupfer`). Keine neuen Hexwerte, kein zweiter Akzent.
- Schrift auf Kupferflächen immer `text-on-copper`, nie weiß.
- `copper-deep` (Glut) nur als Fläche, nie als Schrift oder dünne Linie.
- Feldrahmen in `line-strong`, Fokus in Kupfer (globaler `:focus-visible`-Ring).
  `line` ist nur Dekor.
- `ink-faint` nie unter 14 px und nie für Kleingedrucktes, dort `ink-soft`.
- Logo nur über `brand/Logo.tsx` (`<Logo variant="hell" />`), nie unter 24 px;
  Favicon ist `brand/favicon.svg` (kopiert nach `app/icon.svg`). SVG-Pfade nicht ändern.
- Glut-Optik angelehnt an die Vorlage „Fluxora“: Klassen `.bg-ember`
  (Glut-Hintergrund) und `.glass` (Glasfläche) in `app/globals.css`.
- Schriften lokal über next/font: Inter (Fließtext), Inter Tight (`font-display`,
  Überschriften, `tracking-[-0.035em]`), Instrument Serif kursiv (`font-serif`)
  **nur für das eine hervorgehobene Wort in der Hero-Überschrift jeder Seite**
  (`headline.accent`). Keine weiteren Familien.
- Haupt-Button: Kupfer-Verlauf als Pille mit runder Pfeil-Kachel
  (`ButtonLink` variant `primary`). Labels über Überschriften: Haarlinie mit
  kleinem Text (`components/ui/Tag.tsx`).
- Bewegung nur per CSS (`animate-rise`, gestaffelt), abgeschaltet bei
  `prefers-reduced-motion`. Keine Animationsbibliothek.
- Glaskarten im Hero zeigen nur nachprüfbare Fakten, nie Kundenzahlen oder Quoten.
- Hero-Überschrift in Inter Tight **SemiBold** (`font-semibold`, `leading-[0.92]`,
  `tracking-[-0.035em]`). ExtraBold wurde probiert und verworfen (Andreas, 19.10.2026).
- Der Hero ist bewusst nur Text auf dem Glut-Hintergrund, ohne Bild
  (Entscheidung Andreas, 19.10.2026).
- Keine Stockfotos von Personen, die nicht zum Team gehören, keine erfundenen
  Partnerlogos. Bilder nur als echtes Material: Fotos von Andreas und Dennis,
  freigegebene Screenshots. Ein Hintergrundvideo nur selbst gedreht und klein
  (Ladezeit auf dem Handy).

## Rechtliches (verbindlich)

- Unternehmensträger ist **Andreas Strehle, Einzelunternehmer** (seit 01.10.2026).
  Keine erfundene Rechtsform: kein GmbH, GbR, „& Partner“ im Namen.
  Dennis da Silva darf als Teammitglied erscheinen, nie als Gesellschafter
  oder Geschäftsführer.
- Impressum (§ 5 DDG) kommt ausschließlich aus `LEGAL_ENTITY`. Bei Gründung
  der GbR/UG wird nur dort geändert.
- Datenschutzerklärung beschreibt nur Dienste, die wirklich laufen.
- Externe Terminbuchung braucht AVV und Eintrag in der Datenschutzerklärung.
- Chatbots müssen als KI gekennzeichnet sein (Art. 50 EU AI Act).
- Keine Rechtsdienstleistung (RDG): Wir bauen Technik, wir beraten nicht.

## Texte

- Sie-Form, seriös, bodenständig. Deutsch.
- **Keine Gedankenstriche im Fließtext.**
- Keine „Garantie“, kein „100 %“, keine „Haftungssicherheit“. Fristen nur als
  Übersicht, nie als Schutz vor Fristversäumnis.
- **Keine erfundenen Referenzen, Testimonials, Logos oder Zahlen** (§ 5 UWG).
  Kundennamen nur mit schriftlicher Freigabe.
- „Hosting in Deutschland“ nur dort behaupten, wo es stimmt. Diese Website
  selbst läuft auf Vercel (US-Anbieter).
- Keine Platzhaltertexte im Livegang: lieber eine Sektion weniger.

## Git-Konventionen

- `main` ist der Produktivstand. Nie direkt auf `main` committen.
- Branches: `feature/<kurzbeschreibung>` bzw. `fix/<kurzbeschreibung>`.
- Commits nach Conventional Commits auf Deutsch, eine Zeile, Imperativ, kein
  Punkt: `feat: Kontaktformular ergänzen`, `fix: Umbruch im Hero korrigieren`.
- Vor jedem Push müssen `npm run build` und `npm run lint` grün sein.
- Push mit `git push -u origin <branch>`, Merge per Pull Request gegen `main`.
  Vercel baut zu jedem PR eine Preview. Merge auf `main` = Produktiv-Deploy.

## Geheimnisse

- `.env.local` wird nie committet. `.env.example` listet alle Variablen ohne Werte.
- Alles mit `NEXT_PUBLIC_` ist öffentlich. Dort nie einen geheimen Schlüssel.

## Bewusste Platzhalter (nicht ungefragt „reparieren“)

- Domain `example.com` (stift-und-server.de noch nicht registriert, DPMA-Recherche offen)
- Telefon, E-Mail, USt-IdNr. in `LEGAL_ENTITY` (USt-IdNr. ist beantragt)
- Datenschutzerklärung (Inhalt `PRIVACY_PAGE`): Entwurf, `[E-MAIL-ANBIETER]` offen, vor Livegang juristisch prüfen lassen. Jeder neue Dienst (Terminbuchung, Formularversand, Analyse) muss dort eingetragen werden, bevor er live geht
- Preis Stufe 1 „ab 2.490 €“: noch abzustimmen (Stufenmodell oder Dossier-Pakete)
- Pilotreferenz anonym, bis die Kanzlei schriftlich zustimmt
- Portraitfotos (Initialen als Platzhalter), Text zu Dennis noch nicht bestätigt
- Demo-Video (`SITE.demoVideo`, Abschnitt ist ausgeblendet, solange leer)
- Terminbuchung (`SITE.bookingUrl`, leer = Buttons führen zum Formular)
- Kontaktformular sendet per mailto, noch kein Server-Versand
- Unterseiten `/unternehmen` und `/vereine`: Texte sind ein erster Entwurf, noch ohne eigene Referenzen für Unternehmen
