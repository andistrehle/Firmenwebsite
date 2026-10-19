import type { Metadata } from "next";
import AudiencePage from "@/components/pages/AudiencePage";
import { PAGE_UNTERNEHMEN } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGE_UNTERNEHMEN.meta.title,
  description: PAGE_UNTERNEHMEN.meta.description,
  alternates: { canonical: "/unternehmen" },
};

export default function UnternehmenPage() {
  return <AudiencePage content={PAGE_UNTERNEHMEN} />;
}
