/**
 * Alle redaktionellen Inhalte der Website.
 * Komponenten rendern ausschließlich, Texte werden nur hier geändert.
 *
 * Regeln (siehe CLAUDE.md): keine Garantien, kein „100 %“, keine erfundenen
 * Referenzen oder Zahlen, keine Rechtsberatung, keine Gedankenstriche im Fließtext.
 * Der Firmenname kommt immer aus BRAND, nie als Text.
 */

import type { IconName } from "@/components/ui/icons";
import { BRAND } from "./site-config";

export type NavItem = { label: string; href: string };
export type Feature = { icon: IconName; title: string; text: string };
export type Step = { title: string; text: string };
export type Faq = { question: string; answer: string };

export type ServiceStatus = "verfügbar" | "entwicklung";
export type Service = {
  icon: IconName;
  stage: string;
  status: ServiceStatus;
  title: string;
  text: string;
  points: string[];
  price?: string;
  priceNote?: string;
};

export type InquiryStep = { question: string; answer: string };
export type SummaryRow = { label: string; value: string; flag?: boolean };
export type Reference = { tag: string; title: string; text: string; url?: string };

export const NAV: NavItem[] = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Beispiel", href: "#beispiel" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "FAQ", href: "#faq" },
];

export const HEADER = {
  cta: "Kostenlose Demo",
  menuOpen: "Menü öffnen",
  menuClose: "Menü schließen",
};

export const HERO = {
  eyebrow: "Für Einzelanwälte und kleine Kanzleien",
  headline: "Ihre Mandanten erreichen Sie online, bevor sie anrufen.",
  subline:
    "Wir bauen Kanzlei-Websites mit einer Anfragestrecke, die Anliegen geordnet bei Ihnen ankommen lässt. Ihre Kanzleisoftware bleibt, wie sie ist.",
  offerTitle: "Kostenlose klickbare Demo in 48 Stunden",
  offerText: "Mit 2 bis 3 Designvorschlägen für Ihre Kanzlei. Unverbindlich.",
  primaryCta: "Demo anfordern",
  secondaryCta: "Beispiel ansehen",
  trust: ["Ohne Tracking", "Ohne Cookie-Banner", "Persönlich in München und NRW"],
};

export const PROBLEMS = {
  eyebrow: "Kennen Sie das?",
  headline: "Gute Mandate gehen selten an der Arbeit verloren, sondern am Eingang.",
  items: [
    {
      icon: "phone",
      title: "Anfragen kommen ungeordnet",
      text: "Anrufe, E-Mails, Kontaktformulare. Bei fast jeder Anfrage fehlt etwas, das Sie erst nachfragen müssen.",
    },
    {
      icon: "clock",
      title: "Erstgespräche kosten Zeit",
      text: "Manches Gespräch endet mit der Erkenntnis, dass das Anliegen gar nicht zu Ihren Rechtsgebieten passt.",
    },
    {
      icon: "monitor",
      title: "Die Website ist in die Jahre gekommen",
      text: "Auf dem Smartphone schwer lesbar, selten aktualisiert und ohne klaren Weg zur Kontaktaufnahme.",
    },
  ] satisfies Feature[],
};

export const BENEFITS = {
  eyebrow: "Was sich ändert",
  headline: "Drei Dinge, die Ihren Kanzleialltag spürbar entlasten",
  items: [
    {
      icon: "clipboard",
      title: "Geordnete Erstanfragen",
      text: "Die Anfragestrecke fragt Rechtsgebiet, Anliegen und wichtige Daten ab. Bei Ihnen kommt eine übersichtliche Zusammenfassung an.",
    },
    {
      icon: "calendar",
      title: "Termine ohne Telefonschleife",
      text: "Mandanten wählen selbst einen freien Termin für das Erstgespräch. Sie legen fest, welche Zeiten buchbar sind.",
    },
    {
      icon: "plug",
      title: "Passt zu Ihrer Kanzleisoftware",
      text: "Wir ersetzen RA-MICRO, Advoware oder DATEV nicht. Abrechnung, beA und Fristenkontrolle bleiben dort, wo sie heute sind.",
    },
  ] satisfies Feature[],
};

export const SERVICE_STATUS_LABEL: Record<ServiceStatus, string> = {
  verfügbar: "Verfügbar",
  entwicklung: "In Entwicklung",
};

export const SERVICES = {
  eyebrow: "Leistungen",
  headline: "In Stufen aufgebaut. Sie entscheiden, wie weit Sie gehen.",
  intro:
    "Sie beginnen mit einer zeitgemäßen Website. Die weiteren Stufen bauen darauf auf, wenn es für Ihre Kanzlei passt.",
  items: [
    {
      icon: "layout",
      stage: "Stufe 1",
      status: "verfügbar",
      title: "Website mit Anfragestrecke",
      text: "Eine schnelle, gut lesbare Website, die Ihre Rechtsgebiete klar darstellt und Mandanten strukturiert zur Anfrage führt.",
      points: [
        "Für Smartphone, Tablet und Desktop",
        "Anfragestrecke und Terminbuchung",
        "Texte gemeinsam mit Ihnen erarbeitet",
      ],
      price: "ab 2.490 €", // TODO: mit Andreas abstimmen (Stufenmodell oder Dossier-Pakete)
      priceNote: "einmalig, Betreuung optional ab 99 € im Monat",
    },
    {
      icon: "upload",
      stage: "Stufe 2",
      status: "entwicklung",
      title: "Mandanten-Upload",
      text: "Mandanten reichen Unterlagen sicher über Ihre Website ein, statt sie per E-Mail zu schicken.",
      points: [
        "Dokumente direkt der Anfrage zugeordnet",
        "Vertrag nach § 43e BRAO",
        "Preis auf Anfrage",
      ],
    },
    {
      icon: "dashboard",
      stage: "Stufe 3",
      status: "entwicklung",
      title: "Kanzlei-Dashboard",
      text: "Ein Arbeitsplatz für Eingang, Termine und Wiedervorlagen als Ergänzung zu Ihrer bestehenden Software.",
      points: [
        "Übersicht statt weiterer Insellösung",
        "Fristenkontrolle bleibt im Primärsystem",
        "Preis auf Anfrage",
      ],
    },
  ] satisfies Service[],
};

export const DEMO = {
  eyebrow: "Beispiel",
  headline: "So kommt eine Anfrage über die Anfragestrecke bei Ihnen an",
  intro:
    "Ein vereinfachtes Beispiel mit erfundenen Daten. Links die Fragen, wie sie der Mandant beantwortet. Rechts die Zusammenfassung, die Sie erhalten.",
  notice: "Beispiel mit erfundenen Daten",
  formTitle: "Anfrage an die Kanzlei",
  startButton: "Beispiel abspielen",
  nextButton: "Nächste Frage",
  restartButton: "Von vorn",
  summaryTitle: "Zusammenfassung für die Kanzlei",
  summaryWaiting: "Die Zusammenfassung erscheint, sobald die Anfrage abgeschickt ist.",
  summaryFlag: "Bitte Fristen prüfen",
  steps: [
    { question: "Worum geht es?", answer: "Arbeitsrecht" },
    { question: "Was ist passiert?", answer: "Kündigung durch den Arbeitgeber" },
    { question: "Wann ist Ihnen das Schreiben zugegangen?", answer: "12.10.2026, per Post" },
    { question: "Seit wann arbeiten Sie dort?", answer: "Seit 6 Jahren" },
    { question: "Wie erreichen wir Sie am besten?", answer: "Telefon ab 17 Uhr" },
  ] satisfies InquiryStep[],
  summary: [
    { label: "Rechtsgebiet", value: "Arbeitsrecht, Kündigung" },
    { label: "Zugang des Schreibens", value: "12.10.2026, per Post", flag: true },
    { label: "Betriebszugehörigkeit", value: "6 Jahre" },
    { label: "Erreichbarkeit", value: "Telefon ab 17 Uhr" },
  ] satisfies SummaryRow[],
};

export const DEMO_OFFER = {
  eyebrow: "Unser Angebot zum Kennenlernen",
  headline: "In 48 Stunden sehen Sie Ihre neue Website",
  intro:
    "Bevor Sie sich entscheiden, bauen wir Ihnen eine klickbare Demo mit 2 bis 3 Designvorschlägen. Kostenlos und ohne Verpflichtung.",
  steps: [
    { title: "Sie schreiben uns", text: "Kanzleiname, Rechtsgebiete und Ihre heutige Website genügen." },
    { title: "Wir bauen die Demo", text: "Innerhalb von 48 Stunden erhalten Sie einen Link zu 2 bis 3 Entwürfen." },
    { title: "Sie entscheiden", text: "Gefällt Ihnen ein Entwurf, besprechen wir die Umsetzung. Sonst nicht." },
  ] satisfies Step[],
  cta: "Demo anfordern",
};

export const REFERENCES = {
  eyebrow: "Referenzen",
  headline: "Was wir bisher gebaut haben",
  intro: "Wenige Projekte, dafür echte. Kundennamen nennen wir nur mit schriftlicher Freigabe.",
  items: [
    {
      tag: "Pilotprojekt",
      title: "Relaunch für eine Wirtschaftskanzlei in München",
      text: "Neue Website mit klarer Struktur nach Rechtsgebieten und geführter Kontaktaufnahme.",
    },
    {
      tag: "Eigenes Projekt",
      title: "Plattform für Liga-, Spieler- und Vereinsverwaltung",
      text: "Eine Webplattform mit Spielplänen, Ergebnissen und Verwaltung für einen Dartverband.",
      url: "https://www.mdudarts.de",
    },
  ] satisfies Reference[],
  linkLabel: "Ansehen",
};

export const VIDEO = {
  eyebrow: "In 60 Sekunden",
  headline: "Sehen Sie selbst, wie es funktioniert",
  fallback: "Ihr Browser kann dieses Video nicht abspielen.",
};

export const PRIVACY = {
  eyebrow: "Datenschutz und Berufsrecht",
  headline: "Für Berufsgeheimnisträger gebaut, nicht nachträglich angepasst",
  intro:
    "Ihre Website ist das Erste, was Mandanten von Ihrer Sorgfalt sehen. Deshalb bauen wir sie so, dass Sie jede Frage zum Datenschutz beantworten können.",
  items: [
    {
      icon: "eyeOff",
      title: "Kein Tracking",
      text: "Keine Analyse-Dienste, keine Werbe-Cookies und deshalb auch kein Cookie-Banner.",
    },
    {
      icon: "shield",
      title: "Keine Fremdinhalte",
      text: "Schriften, Bilder und Videos liegen auf Ihrer Website selbst. Nichts wird beim Aufruf von Dritten geladen.",
    },
    {
      icon: "fileSignature",
      title: "Vertrag nach § 43e BRAO",
      text: "Sobald Mandantendaten verarbeitet werden, mit schriftlicher Verschwiegenheitsverpflichtung.",
    },
    {
      icon: "scale",
      title: "Keine Rechtsberatung",
      text: "Wir bauen Technik für Kanzleien. Rechtliche Einschätzungen geben ausschließlich Sie.",
    },
  ] satisfies Feature[],
};

export const ABOUT = {
  eyebrow: "Über uns",
  headline: "Persönlich erreichbar statt Ticketsystem",
  intro: `Hinter ${BRAND.name} stehen zwei Menschen. Sie sprechen immer direkt mit denen, die Ihre Website bauen.`,
  people: [
    {
      initials: "AS",
      name: "Andreas Strehle",
      role: "Technik und Umsetzung, München",
      text: "Diplom-Wirtschaftsingenieur mit über 14 Jahren Projekt- und Programmmanagement in Automotive, Aerospace und Rail. Zertifiziert als KI-Manager und DEKRA AI Officer. Ihr Ansprechpartner für Gespräche vor Ort in München.",
    },
    {
      initials: "DS",
      name: "Dennis da Silva",
      role: "Design und Marketing, NRW",
      text: "Verantwortet Gestaltung und Kommunikation. Sorgt dafür, dass Ihre Website nicht nur funktioniert, sondern Mandanten anspricht.", // TODO: von Dennis bestätigen lassen
    },
  ],
};

export const FAQ = {
  eyebrow: "Häufige Fragen",
  headline: "Was Kanzleien uns am häufigsten fragen",
  items: [
    {
      question: "Ersetzt das meine Kanzleisoftware?",
      answer:
        "Nein. Abrechnung, beA und die verbindliche Fristenkontrolle bleiben in Ihrer bestehenden Software. Wir setzen davor an: bei der Website und beim Eingang neuer Anfragen.",
    },
    {
      question: "Was kostet die Demo?",
      answer:
        "Nichts. Sie erhalten innerhalb von 48 Stunden 2 bis 3 klickbare Entwürfe. Ob Sie danach mit uns weitermachen, entscheiden Sie frei.",
    },
    {
      question: "Was kostet eine Website?",
      answer:
        "Eine Website mit Anfragestrecke beginnt bei 2.490 € einmalig. Nach dem ersten Gespräch erhalten Sie ein schriftliches Festpreisangebot.",
    },
    {
      question: "Braucht meine Website ein Cookie-Banner?",
      answer:
        "Nicht, wenn sie keine Tracking- oder Werbedienste nutzt. So bauen wir Websites standardmäßig.",
    },
    {
      question: "Muss ich etwas installieren?",
      answer:
        "Nein. Die Website läuft im Browser, Anfragen erhalten Sie per E-Mail. Sie brauchen keine zusätzliche Software.",
    },
  ] satisfies Faq[],
};

export const CONTACT = {
  eyebrow: "Kontakt",
  headline: "Fordern Sie Ihre kostenlose Demo an",
  intro:
    "Schreiben Sie uns kurz zu Ihrer Kanzlei. Innerhalb von 48 Stunden erhalten Sie einen Link zu Ihren Entwürfen.",
  bookingCta: "Lieber direkt einen Termin",
  emailLabel: "Oder per E-Mail:",
  form: {
    name: "Ihr Name",
    firm: "Kanzlei",
    email: "E-Mail-Adresse",
    website: "Heutige Website (falls vorhanden)",
    message: "Ihre Nachricht",
    messagePlaceholder: "z. B. Rechtsgebiete und was Sie an Ihrer Website verbessern möchten",
    submit: "Demo anfordern",
    privacyNote:
      "Ihre Angaben verwenden wir nur zur Bearbeitung Ihrer Anfrage. Details in der",
    privacyLink: "Datenschutzerklärung",
    mailtoNote: "Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Nachricht.",
    subject: "Demo-Anfrage über die Website",
  },
};

export const FOOTER = {
  imprint: "Impressum",
  privacy: "Datenschutz",
};

export const IMPRINT = {
  title: "Impressum",
  providerHeading: "Angaben gemäß § 5 DDG",
  contactHeading: "Kontakt",
  phoneLabel: "Telefon",
  emailLabel: "E-Mail",
  vatHeading: "Umsatzsteuer-ID",
  vatLabel: "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG",
  vatPending: "beantragt",
  missing: "wird ergänzt",
  back: "Zur Startseite",
};

export const PRIVACY_PAGE = {
  title: "Datenschutzerklärung",
  text: "Die Datenschutzerklärung wird vor der Veröffentlichung ergänzt. Sie beschreibt genau die Dienste, die auf dieser Website tatsächlich laufen.",
  back: "Zur Startseite",
};
