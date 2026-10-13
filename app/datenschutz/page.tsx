import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { PRIVACY_PAGE } from "@/lib/content";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = { title: PRIVACY_PAGE.title, robots: { index: false },
  alternates: { canonical: SITE.legal.privacyPath },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title={PRIVACY_PAGE.title} backLabel={PRIVACY_PAGE.back}>
      <p>{PRIVACY_PAGE.text}</p>
    </LegalPage>
  );
}
