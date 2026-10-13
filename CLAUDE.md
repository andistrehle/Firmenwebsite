# Firmenwebsite Andreas Strehle & Dennis da Silva — Projekt-Briefing für Claude

Vertriebswebsite für Anwaltskanzleien (Einzelanwälte, kleine Kanzleien).
Die Seite muss Anfragen erzeugen und selbst beweisen, dass wir gute Websites
bauen. Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react.
Hosting auf Vercel, automatischer Deploy bei Push auf `main`.

Firmenname ist **noch nicht entschieden** (Arbeitstitel). Domain hängt am Namen.

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

- Monochrom und warm, angelehnt an den Dribbble-Shot „Consultia“
  (Yohann Varillon): Weiß, warmes Hellgrau, schwarze Buttons, keine Akzentfarbe.
  Schrift Instrument Sans, Überschriften in mittlerer Stärke mit Punkt am Ende,
  kleine graue Label-Kästchen (`components/ui/Tag.tsx`) über jeder Überschrift.
- Keine Stockfotos von Personen, die nicht zum Team gehören. Bildflächen zeigen
  gezeichnete Website-Entwürfe oder echte Fotos von Andreas und Dennis.

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

- Firmenname `BRAND.name` = „Arbeitstitel“, Domain `example.com`
- Telefon, E-Mail, USt-IdNr. in `LEGAL_ENTITY` (USt-IdNr. ist beantragt)
- Datenschutzerklärung (`app/datenschutz/`)
- Preis Stufe 1 „ab 2.490 €“: noch abzustimmen (Stufenmodell oder Dossier-Pakete)
- Pilotreferenz anonym, bis die Kanzlei schriftlich zustimmt
- Portraitfotos (Initialen als Platzhalter), Text zu Dennis noch nicht bestätigt
- Demo-Video (`SITE.demoVideo`, Abschnitt ist ausgeblendet, solange leer)
- Terminbuchung (`SITE.bookingUrl`, leer = Buttons führen zum Formular)
- Kontaktformular sendet per mailto, noch kein Server-Versand
- Zweite Landingpage für andere Branchen (`/branchen/handwerk`) fehlt noch
