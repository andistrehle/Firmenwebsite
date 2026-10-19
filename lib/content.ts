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
export type Step = { icon: IconName; title: string; text: string };
export type Faq = { question: string; answer: string };

export type ServiceStatus = "verfügbar" | "entwicklung";
export type Service = {
  icon: IconName;
  stage: string;
  status: ServiceStatus;
  title: string;
  text: string;
  /** Häkchen-Kärtchen im Bild rechts, solange diese Stufe gewählt ist */
  highlights: string[];
  price?: string;
  priceNote?: string;
};

export type InquiryStep = { question: string; answer: string };
export type SummaryRow = { label: string; value: string; flag?: boolean };
export type Reference = { tag: string; title: string; text: string; url?: string };

export const NAV: NavItem[] = [
  { label: "Für wen", href: "#zielgruppen" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "FAQ", href: "#faq" },
];

export const HEADER = {
  cta: "Kostenlose Demo",
  menuOpen: "Menü öffnen",
  menuClose: "Menü schließen",
};

export type Stat = { value: string; label: string };

export const HERO = {
  note: ["Persönlich für Sie da", "in München und NRW"],
  /** Überschrift in Zeilen. `accent` wird kursiv in der Serifenschrift gesetzt. */
  headline: {
    before: "Mehr",
    accent: "Zeit",
    after: "für Mandanten, Kunden und Mitglieder.",
  },
  subline:
    "Webseiten, Automatisierung und KI für alle, die weniger verwalten und mehr bewirken wollen.",
  primaryCta: "Kostenlose Demo anfordern",
  secondaryCta: "Leistungen ansehen",
  /** Glaskarten: nur nachprüfbare Fakten, keine Kundenzahlen */
  stats: [
    { value: "48 h", label: "bis zu Ihrer kostenlosen Demo" },
    { value: "ab 2.490 €", label: "Website mit Anfragestrecke" },
    { value: "0", label: "Tracking-Cookies" },
  ] satisfies Stat[],
};

export type Audience = {
  icon: IconName;
  title: string;
  text: string;
  /** Anker auf der Startseite (#…) oder Pfad einer Unterseite (/…) */
  href: string;
  linkLabel: string;
  highlight?: boolean;
};

/** Weiche direkt unter dem Hero: Kanzleien bleiben auf der Startseite, der Rest führt auf Unterseiten. */
export const AUDIENCES = {
  tag: "Für wen wir arbeiten",
  headline: "Drei Zielgruppen. Ein Ziel: weniger verwalten.",
  items: [
    {
      icon: "scale",
      title: "Kanzleien",
      text: "Websites mit Anfragestrecke für Einzelanwälte und kleine Kanzleien. Unser Schwerpunkt.",
      href: "#leistungen",
      linkLabel: "Zu den Leistungen",
      highlight: true,
    },
    {
      icon: "briefcase",
      title: "Unternehmen",
      text: "Für Handwerk, Dienstleister und kleine Betriebe: Website, Online-Anfragen und automatisierte Abläufe.",
      href: "/unternehmen",
      linkLabel: "Mehr erfahren",
    },
    {
      icon: "users",
      title: "Vereine",
      text: "Website, Mitgliederverwaltung und Online-Anmeldung, damit der Vorstand mehr Zeit für das Vereinsleben hat.",
      href: "/vereine",
      linkLabel: "Mehr erfahren",
    },
  ] satisfies Audience[],
};

export type AudiencePageContent = {
  meta: { title: string; description: string };
  tag: string;
  headline: { before: string; accent: string; after: string };
  intro: string;
  offersTag: string;
  offersHeadline: string;
  offers: Feature[];
  tasksHeadline: string;
  tasks: string[];
  aiNote?: string;
  reference?: { tag: string; title: string; text: string; url: string; linkLabel: string };
  cta: { headline: string; text: string; button: string };
  back: string;
};

const AUDIENCE_CTA_BUTTON = "Kostenlose Demo anfordern";

/** Unterseite /unternehmen */
export const PAGE_UNTERNEHMEN: AudiencePageContent = {
  meta: {
    title: "Für Unternehmen",
    description:
      "Websites, Online-Anfragen und automatisierte Abläufe für Handwerksbetriebe, Dienstleister und kleine Unternehmen.",
  },
  tag: "Für Unternehmen",
  headline: { before: "Weniger Büro. Mehr", accent: "Zeit", after: "für Ihre Kunden." },
  intro:
    "Für Handwerksbetriebe, Dienstleister und kleine Unternehmen: Wir bauen Ihre Website und automatisieren die Abläufe, die heute Zeit kosten.",
  offersTag: "Leistungen",
  offersHeadline: "Was wir für Ihren Betrieb bauen.",
  offers: [
    {
      icon: "layout",
      title: "Website mit Anfrageformular",
      text: "Eine schnelle Website, über die Kunden ihr Anliegen geordnet schildern und Fotos oder Unterlagen mitschicken.",
    },
    {
      icon: "calendar",
      title: "Online-Terminbuchung",
      text: "Kunden buchen freie Termine selbst, Erinnerungen gehen automatisch raus. Welche Zeiten buchbar sind, legen Sie fest.",
    },
    {
      icon: "workflow",
      title: "Automatisierte Abläufe",
      text: "Anfragen, Angebote und Rückfragen landen an einer Stelle, statt verstreut in Postfach und Telefonnotizen.",
    },
  ],
  tasksHeadline: "Typische Aufgaben, die wir Ihnen abnehmen.",
  tasks: [
    "Anfragen per Formular sammeln statt am Telefon mitschreiben",
    "Terminerinnerungen automatisch versenden",
    "Wiederkehrende E-Mails als Vorlage vorbereiten",
    "Unterlagen von Kunden geordnet empfangen",
  ],
  aiNote:
    "KI setzen wir dort ein, wo sie verlässlich hilft, etwa beim Vorsortieren von Anfragen. Die Entscheidungen bleiben bei Ihnen.",
  cta: {
    headline: "Ihre kostenlose Demo in 48 Stunden.",
    text: "Schreiben Sie uns kurz zu Ihrem Betrieb. Sie erhalten 2 bis 3 klickbare Entwürfe, unverbindlich.",
    button: AUDIENCE_CTA_BUTTON,
  },
  back: "Zur Startseite",
};

/** Unterseite /vereine */
export const PAGE_VEREINE: AudiencePageContent = {
  meta: {
    title: "Für Vereine",
    description:
      "Vereinswebsites, Online-Anmeldung und Spielpläne für Sportvereine, Verbände und gemeinnützige Vereine.",
  },
  tag: "Für Vereine",
  headline: { before: "Weniger Verwaltung. Mehr", accent: "Zeit", after: "für Ihre Mitglieder." },
  intro:
    "Für Sportvereine, Verbände und gemeinnützige Vereine: Wir nehmen dem Vorstand die Arbeit ab, die sich jede Saison wiederholt.",
  offersTag: "Leistungen",
  offersHeadline: "Was wir für Ihren Verein bauen.",
  offers: [
    {
      icon: "layout",
      title: "Vereinswebsite",
      text: "Termine, Ansprechpartner und Neuigkeiten an einer Stelle, vom Vorstand selbst zu pflegen.",
    },
    {
      icon: "users",
      title: "Mitglieder und Anmeldungen",
      text: "Online-Anmeldung für Mitgliedschaft, Training oder Veranstaltungen, übersichtlich gesammelt.",
    },
    {
      icon: "trophy",
      title: "Spielpläne und Ergebnisse",
      text: "Für Ligen und Turniere: Spielpläne, Ergebnisse und Tabellen, die sich automatisch aktualisieren.",
    },
  ],
  tasksHeadline: "Typische Aufgaben, die wir dem Vorstand abnehmen.",
  tasks: [
    "Mitgliedsanträge online statt auf Papier",
    "Termine und Trainingszeiten an einer Stelle",
    "Ergebnisse direkt nach dem Spiel veröffentlicht",
    "Weniger Rundmails, weil alles auf der Website steht",
  ],
  reference: {
    tag: "Eigenes Projekt",
    title: "Plattform für Liga-, Spieler- und Vereinsverwaltung",
    text: "Unsere eigene Webplattform für den Dartsport zeigt, was für Vereine und Verbände möglich ist: Spielpläne, Ergebnisse und Verwaltung an einem Ort.",
    url: "https://www.mdudarts.de",
    linkLabel: "Ansehen",
  },
  cta: {
    headline: "Ihre kostenlose Demo in 48 Stunden.",
    text: "Schreiben Sie uns kurz zu Ihrem Verein. Sie erhalten 2 bis 3 klickbare Entwürfe, unverbindlich.",
    button: AUDIENCE_CTA_BUTTON,
  },
  back: "Zur Startseite",
};

export const SERVICE_STATUS_LABEL: Record<ServiceStatus, string> = {
  verfügbar: "Verfügbar",
  entwicklung: "In Entwicklung",
};

export const SERVICES = {
  tag: "Leistungen",
  headline: "Drei Stufen. Sie entscheiden, wie weit Sie gehen.",
  cta: "Kostenlose Demo anfordern",
  items: [
    {
      icon: "layout",
      stage: "Stufe 1",
      status: "verfügbar",
      title: "Website mit Anfragestrecke",
      text: "Eine schnelle, gut lesbare Website, die Ihre Rechtsgebiete klar darstellt und Mandanten strukturiert zur Anfrage führt. Mit Terminbuchung für das Erstgespräch.",
      highlights: ["Rechtsgebiete klar dargestellt", "Anfragen geordnet erfasst", "Erstgespräch direkt buchbar"],
      price: "ab 2.490 €", // TODO: mit Andreas abstimmen (Stufenmodell oder Dossier-Pakete)
      priceNote: "einmalig, Betreuung optional ab 99 € im Monat",
    },
    {
      icon: "upload",
      stage: "Stufe 2",
      status: "entwicklung",
      title: "Mandanten-Upload",
      text: "Mandanten reichen Unterlagen sicher über Ihre Website ein, statt sie per E-Mail zu schicken. Mit Vertrag nach § 43e BRAO.",
      highlights: ["Unterlagen sicher eingereicht", "Direkt der Anfrage zugeordnet", "Keine Anhänge per E-Mail"],
    },
    {
      icon: "dashboard",
      stage: "Stufe 3",
      status: "entwicklung",
      title: "Kanzlei-Dashboard",
      text: "Ein Arbeitsplatz für Eingang, Termine und Wiedervorlagen als Ergänzung zu Ihrer Software. Die Fristenkontrolle bleibt im Primärsystem.",
      highlights: ["Eingang auf einen Blick", "Termine und Wiedervorlagen", "Ergänzt Ihre Kanzleisoftware"],
    },
  ] satisfies Service[],
};

export const PROCESS = {
  tag: "Ablauf",
  headline: "In 48 Stunden sehen Sie Ihre neue Website.",
  intro:
    "Bevor Sie sich entscheiden, bauen wir Ihnen eine klickbare Demo mit 2 bis 3 Designvorschlägen. Kostenlos und ohne Verpflichtung.",
  steps: [
    {
      icon: "mail",
      title: "Sie schreiben uns",
      text: "Kanzleiname, Rechtsgebiete und Ihre heutige Website genügen.",
    },
    {
      icon: "layout",
      title: "Wir bauen die Demo",
      text: "Innerhalb von 48 Stunden erhalten Sie einen Link zu 2 bis 3 Entwürfen.",
    },
    {
      icon: "check",
      title: "Sie entscheiden",
      text: "Gefällt Ihnen ein Entwurf, besprechen wir die Umsetzung. Sonst nicht.",
    },
  ] satisfies Step[],
  cta: "Demo anfordern",
};

export const DEMO = {
  tag: "Beispiel",
  headline: "So kommt eine Anfrage bei Ihnen an.",
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

export const REFERENCES = {
  tag: "Referenzen",
  headline: "Was wir bisher gebaut haben.",
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
      text: "Unsere eigene Webplattform für den Dartsport: Spielpläne, Ergebnisse und Verwaltung von Ligen, Spielern und Vereinen.",
      url: "https://www.mdudarts.de",
    },
  ] satisfies Reference[],
  linkLabel: "Ansehen",
};

export const VIDEO = {
  tag: "In 60 Sekunden",
  headline: "Sehen Sie selbst, wie es funktioniert.",
  fallback: "Ihr Browser kann dieses Video nicht abspielen.",
};

export const PRIVACY = {
  tag: "Datenschutz und Berufsrecht",
  headline: "Für Berufsgeheimnisträger gebaut.",
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
      text: "Sobald Mandantendaten verarbeitet werden, mit schriftlicher Verschwiegenheits\u00ADverpflichtung.", // \u00AD = weiche Trennstelle für schmale Karten
    },
    {
      icon: "scale",
      title: "Keine Rechtsberatung",
      text: "Wir bauen Technik für Kanzleien. Rechtliche Einschätzungen geben ausschließlich Sie.",
    },
  ] satisfies Feature[],
};

export const ABOUT = {
  tag: "Über uns",
  headline: "Persönlich erreichbar statt Ticketsystem.",
  intro: `Hinter ${BRAND.name} stehen zwei Menschen. Sie sprechen immer direkt mit denen, die Ihre Website bauen.`,
  people: [
    {
      initials: "AS",
      name: "Andreas Strehle",
      role: "Technik und Umsetzung, München",
      lead: "Ich sorge dafür, dass Ihre Website zuverlässig läuft und Anfragen sauber ankommen.",
      text: "Diplom-Wirtschaftsingenieur mit über 14 Jahren Projekt- und Programmmanagement in Automotive, Aerospace und Rail. Zertifiziert als KI-Manager und DEKRA AI Officer. Ihr Ansprechpartner für Gespräche vor Ort in München.",
    },
    {
      initials: "DS",
      name: "Dennis da Silva",
      role: "Design und Marketing, NRW",
      lead: "Ich sorge dafür, dass Ihre Website Mandanten anspricht.", // TODO: von Dennis bestätigen lassen
      text: "Verantwortet Gestaltung und Kommunikation, vom ersten Entwurf bis zu den Texten, die Ihre Kanzlei verständlich beschreiben.", // TODO: von Dennis bestätigen lassen
    },
  ],
  /** Grundsatz statt Kundenzitat, solange keine freigegebenen Zitate vorliegen */
  statement:
    "Wir ersetzen Ihre Kanzleisoftware nicht. Wir sorgen dafür, dass neue Mandate geordnet bei Ihnen ankommen.",
  statementLabel: "Unser Grundsatz",
};

export const FAQ = {
  tag: "FAQ",
  headline: "Was Kanzleien uns fragen, bevor sie starten.",
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
  tag: "Kontakt",
  headline: "Fordern Sie Ihre kostenlose Demo an.",
  intro: "Schreiben Sie uns kurz zu Ihrer Kanzlei. Innerhalb von 48 Stunden erhalten Sie:",
  checklist: [
    "2 bis 3 klickbare Entwürfe für Ihre Kanzlei",
    "Einen Vorschlag für Ihre Anfragestrecke",
    "Ein Festpreisangebot, falls Sie weitermachen möchten",
  ],
  bookingCta: "Lieber direkt einen Termin",
  emailLabel: "Oder per E-Mail:",
  form: {
    name: "Ihr Name",
    firm: "Kanzlei",
    email: "E-Mail-Adresse",
    website: "Heutige Website",
    websitePlaceholder: "falls vorhanden",
    message: "Ihre Nachricht",
    messagePlaceholder: "z. B. Rechtsgebiete und was Sie an Ihrer Website verbessern möchten",
    submit: "Demo anfordern",
    privacyNote: "Ihre Angaben verwenden wir nur zur Bearbeitung Ihrer Anfrage. Details in der",
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

export type PrivacySection = { heading: string; paragraphs: string[]; list?: string[] };

/**
 * Datenschutzerklärung nach Art. 13 DSGVO.
 * Beschreibt nur, was tatsächlich läuft: Hosting bei Vercel, lokal ausgelieferte
 * Schriften, Kontakt per E-Mail. Bei jedem neuen Dienst (Terminbuchung, Formular-
 * versand, Analyse) hier ergänzen, bevor er live geht.
 */
export const PRIVACY_PAGE = {
  title: "Datenschutzerklärung",
  back: "Zur Startseite",
  stand: "Stand: 19. Oktober 2026",
  controllerHeading: "Verantwortlicher",
  controllerIntro: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
  emailLabel: "E-Mail",
  phoneLabel: "Telefon",
  missing: "wird ergänzt",
  sections: [
    {
      heading: "Das Wichtigste in Kürze",
      paragraphs: [
        "Diese Website setzt keine Cookies, verwendet keine Analyse- oder Trackingdienste und bindet keine Inhalte von Drittanbietern ein. Personenbezogene Daten fallen nur an, wenn Sie die Seite aufrufen (technisch notwendige Protokolldaten beim Hoster) und wenn Sie uns eine E-Mail schreiben.",
      ],
    },
    {
      heading: "Hosting und Protokolldaten",
      paragraphs: [
        "Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf der Seite verarbeitet Vercel automatisch folgende Daten, die Ihr Browser übermittelt:",
      ],
      list: [
        "IP-Adresse und daraus abgeleiteter ungefährer Standort (Stadt, Land)",
        "Datum und Uhrzeit des Aufrufs",
        "aufgerufene Seite",
        "Browser, Betriebssystem und Gerätetyp",
      ],
    },
    {
      heading: "Zweck, Rechtsgrundlage und Speicherdauer",
      paragraphs: [
        "Die Daten werden verarbeitet, um die Website auszuliefern, ihren stabilen Betrieb zu gewährleisten und Angriffe abzuwehren. Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und funktionsfähigen Internetauftritt nach Art. 6 Abs. 1 lit. f DSGVO.",
        "Vercel verarbeitet die Daten in unserem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung nach Art. 28 DSGVO und speichert sie nur so lange, wie es für Betrieb und Sicherheit erforderlich ist.",
        "Dabei können Daten in die USA übermittelt werden. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Für zertifizierte Unternehmen hat die EU-Kommission mit Beschluss vom 10. Juli 2023 ein angemessenes Datenschutzniveau festgestellt (Art. 45 DSGVO).",
      ],
    },
    {
      heading: "Schriften",
      paragraphs: [
        "Die auf dieser Website verwendeten Schriften werden zusammen mit der Website über unseren Hoster ausgeliefert. Beim Aufruf der Seite wird keine Verbindung zu Google oder anderen Schriftanbietern aufgebaut.",
      ],
    },
    {
      heading: "Kontakt per E-Mail und Kontaktformular",
      paragraphs: [
        "Das Kontaktformular übermittelt keine Daten an unseren Server. Beim Absenden öffnet sich Ihr eigenes E-Mail-Programm mit einer vorbereiteten Nachricht, die Sie selbst verschicken.",
        "Wenn Sie uns schreiben, verarbeiten wir die Angaben aus Ihrer Nachricht (etwa Name, Kanzlei oder Unternehmen, E-Mail-Adresse, Website und Ihr Anliegen), um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag zielt, im Übrigen unser berechtigtes Interesse an der Beantwortung nach Art. 6 Abs. 1 lit. f DSGVO.",
        "Wir löschen Ihre Nachricht, sobald die Anfrage erledigt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Geschäftsbriefe bewahren wir nach steuerrechtlichen Vorgaben bis zu sechs Jahre auf (§ 147 AO).",
        "Unsere E-Mails werden bei [E-MAIL-ANBIETER] verarbeitet.",
      ],
    },
    {
      heading: "Links zu anderen Websites",
      paragraphs: [
        "Diese Website enthält Links zu anderen Websites, etwa zu Referenzprojekten. Erst wenn Sie einen solchen Link anklicken, werden Daten an den Betreiber der verlinkten Seite übermittelt. Für dessen Datenverarbeitung ist allein dieser verantwortlich.",
      ],
    },
    {
      heading: "Ihre Rechte",
      paragraphs: ["Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:"],
      list: [
        "Auskunft (Art. 15 DSGVO)",
        "Berichtigung (Art. 16 DSGVO)",
        "Löschung (Art. 17 DSGVO)",
        "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Datenübertragbarkeit (Art. 20 DSGVO)",
        "Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)",
      ],
    },
    {
      heading: "Beschwerde bei einer Aufsichtsbehörde",
      paragraphs: [
        "Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht, Promenade 18, 91522 Ansbach.",
      ],
    },
    {
      heading: "Weitere Hinweise",
      paragraphs: [
        "Sie sind nicht verpflichtet, uns personenbezogene Daten bereitzustellen. Ohne Ihre Angaben können wir eine Anfrage jedoch nicht beantworten. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.",
        "Die Verbindung zu dieser Website ist per TLS verschlüsselt. Sie erkennen das am Schloss-Symbol und an „https://“ in der Adresszeile Ihres Browsers.",
      ],
    },
  ] satisfies PrivacySection[],
};
