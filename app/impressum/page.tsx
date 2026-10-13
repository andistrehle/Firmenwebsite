import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { IMPRINT } from "@/lib/content";
import { SITE } from "@/lib/site-config";
import { LEGAL_ENTITY as L } from "@/lib/site-config";

export const metadata: Metadata = { title: IMPRINT.title, robots: { index: false },
  alternates: { canonical: SITE.legal.imprintPath },
};

export default function ImpressumPage() {
  return (
    <LegalPage title={IMPRINT.title} backLabel={IMPRINT.back}>
      <section>
        <h2 className="mb-3 text-lg font-medium text-ink">{IMPRINT.providerHeading}</h2>
        <p>
          {L.owner} ({L.form})
          <br />
          {L.street}
          <br />
          {L.zip} {L.city}
        </p>
        <p className="mt-3 text-ink-soft">{L.tradingAs}</p>
      </section>
      <section>
        <h2 className="mb-3 text-lg font-medium text-ink">{IMPRINT.contactHeading}</h2>
        <p>
          {IMPRINT.phoneLabel}: {L.phone || IMPRINT.missing}
          <br />
          {IMPRINT.emailLabel}: {L.email || IMPRINT.missing}
        </p>
      </section>
      <section>
        <h2 className="mb-3 text-lg font-medium text-ink">{IMPRINT.vatHeading}</h2>
        <p>
          {IMPRINT.vatLabel}: {L.vatId || IMPRINT.vatPending}
        </p>
      </section>
    </LegalPage>
  );
}
