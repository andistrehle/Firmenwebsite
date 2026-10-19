import { SITE } from "@/lib/site-config";

/** Firmenname als Wortmarke mit kleinem Kupfer-Zeichen, bis ein Logo existiert. */
export default function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="size-5 rotate-45 rounded-[5px] bg-gradient-to-br from-copper-lit to-copper"
      />
      <span className="font-display text-[20px] font-semibold tracking-[-0.03em] text-ink">
        {SITE.brandName}
      </span>
    </span>
  );
}
