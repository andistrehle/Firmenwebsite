import { SITE } from "@/lib/site-config";

/** Firmenname als Wortmarke, bis ein Logo existiert. */
export default function Wordmark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={`text-[22px] font-medium tracking-[-0.03em] ${onDark ? "text-surface" : "text-ink"}`}
    >
      {SITE.brandName}
    </span>
  );
}
