import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { PRIVACY_PAGE as P } from "@/lib/content";
import { LEGAL_ENTITY as L, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: P.title,
  robots: { index: false },
  alternates: { canonical: SITE.legal.privacyPath },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title={P.title} backLabel={P.back}>
      <p className="text-ink-soft">{P.stand}</p>

      <section>
        <h2 className="mb-3 font-display text-xl font-semibold text-ink">{P.controllerHeading}</h2>
        <p className="text-ink-soft">{P.controllerIntro}</p>
        <p className="mt-3">
          {L.owner} ({L.form})
          <br />
          {L.street}
          <br />
          {L.zip} {L.city}
          <br />
          {P.emailLabel}: {L.email || P.missing}
          {L.phone && (
            <>
              <br />
              {P.phoneLabel}: {L.phone}
            </>
          )}
        </p>
        <p className="mt-3 text-ink-soft">{L.tradingAs}</p>
      </section>

      {P.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="mb-3 font-display text-xl font-semibold text-ink">{section.heading}</h2>
          <div className="space-y-3 text-ink-soft">
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          {section.list && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-soft marker:text-copper">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </LegalPage>
  );
}
