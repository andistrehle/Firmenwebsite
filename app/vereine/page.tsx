import type { Metadata } from "next";
import AudiencePage from "@/components/pages/AudiencePage";
import { PAGE_VEREINE } from "@/lib/content";

export const metadata: Metadata = {
  title: PAGE_VEREINE.meta.title,
  description: PAGE_VEREINE.meta.description,
  alternates: { canonical: "/vereine" },
};

export default function VereinePage() {
  return <AudiencePage content={PAGE_VEREINE} />;
}
