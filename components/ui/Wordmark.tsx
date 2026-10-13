import { SITE } from "@/lib/site-config";

/** Firmenname als Wortmarke — Platzhalter, bis ein Logo existiert. */
export default function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className={`inline-flex size-8 items-center justify-center rounded-lg text-base font-bold ${onDark ? "bg-white text-navy" : "bg-navy text-white"}`}
      >
        {SITE.brandName.charAt(0)}
      </span>
      <span className={`text-lg font-semibold tracking-tight ${onDark ? "text-white" : "text-navy"}`}>
        {SITE.brandName}
      </span>
    </span>
  );
}
