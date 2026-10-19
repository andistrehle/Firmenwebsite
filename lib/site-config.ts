/**
 * Zentrale Website-Konfiguration.
 *
 * Name, Claim, Domain, Kontaktdaten und Impressumsträger werden HIER gepflegt
 * und nirgendwo sonst. Komponenten und Metadaten lesen ausschließlich von hier.
 *
 * Domain-Umzug:
 *   1. In Vercel `NEXT_PUBLIC_SITE_URL` auf die neue Adresse setzen
 *   2. Nur falls die Seite in einem Unterverzeichnis liegt: `NEXT_PUBLIC_BASE_PATH`
 *   3. Neu deployen. Links, Sitemap, SEO- und OpenGraph-Daten leiten sich daraus ab.
 */

/** Pfad innerhalb der Domain. Leer = Seite liegt im Root (Normalfall). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Öffentliche Adresse ohne abschließenden Slash. */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"; // TODO: Domain, hängt am Namen

/**
 * Marke. Der Name ist noch nicht entschieden (Shortlist: Bürogeist, Vorarbeiter,
 * Stundenplus, Werkgeist, Zweiwerk, Strehle & da Silva). Bis dahin Platzhalter.
 * Keine Rechtsform im Namen, solange keine existiert.
 */
export const BRAND = {
  name: "Arbeitstitel", // TODO: finaler Firmenname
  claim: "Websites und digitale Abläufe für Kanzleien, Unternehmen und Vereine",
} as const;

/**
 * Impressumsträger nach § 5 DDG. Einzige Quelle für Impressum und
 * Pflichtangaben. Wechselt bei Gründung der GbR/UG nur hier.
 */
export const LEGAL_ENTITY = {
  owner: "Andreas Strehle",
  form: "Einzelunternehmer",
  /** Zuordnung der Geschäftsbezeichnung zum Unternehmensträger */
  tradingAs: `${BRAND.name} ist eine Geschäftsbezeichnung von Andreas Strehle (Einzelunternehmer).`,
  street: "Weyarner Str. 55",
  zip: "81547",
  city: "München",
  phone: "", // TODO: Telefonnummer
  email: "", // TODO: E-Mail-Adresse
  vatId: "", // TODO: USt-IdNr., ist beantragt
} as const;

export const SITE = {
  brandName: BRAND.name,
  brandTagline: BRAND.claim,

  /** Vollständige Basis-URL inkl. Pfad */
  baseUrl: `${SITE_URL}${BASE_PATH}`,

  /** Kontakt für Formular und Buttons */
  email: LEGAL_ENTITY.email || "kontakt@example.com", // TODO: echte Adresse in LEGAL_ENTITY
  phone: LEGAL_ENTITY.phone,

  /**
   * Externer Terminkalender. Wird nur verlinkt, nie eingebettet.
   * Braucht AVV und Eintrag in der Datenschutzerklärung; selbst gehostet bevorzugt.
   * Leer = Termin-Buttons führen zum Kontaktformular.
   */
  bookingUrl: "",

  /**
   * Demo-Video, selbst gehostet unter /public (kein Loom- oder YouTube-Embed).
   * Leer = der Video-Abschnitt wird nicht angezeigt.
   * Beispiel: { src: "/videos/demo.mp4", poster: "/videos/demo-poster.jpg" }
   */
  demoVideo: {
    src: "",
    poster: "",
  },

  /** Rechtliches */
  legal: {
    imprintPath: "/impressum",
    privacyPath: "/datenschutz",
  },

  /** SEO */
  seo: {
    title: `${BRAND.name} | Websites für Anwaltskanzleien`,
    description:
      "Websites mit Anfragestrecke und Terminbuchung für Einzelanwälte und kleine Kanzleien. Kostenlose klickbare Demo in 48 Stunden. Ohne Tracking, ohne Cookie-Banner.",
    siteName: BRAND.name,
  },
} as const;

/** Ziel für alle „Gespräch vereinbaren“-Buttons */
export const BOOKING_HREF = SITE.bookingUrl || "#kontakt";
export const BOOKING_IS_EXTERNAL = SITE.bookingUrl !== "";
