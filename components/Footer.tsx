import { FOOTER } from "@/lib/content";
import { BASE_PATH, SITE } from "@/lib/site-config";
import Wordmark from "./ui/Wordmark";

/** Footer mit großem, kaum sichtbarem Namen als Wasserzeichen. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 pt-14 pb-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <Wordmark />
          <p className="mt-3 text-sm text-ink-faint">{SITE.brandTagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-faint">
          <a href={`${BASE_PATH}${SITE.legal.imprintPath}`} className="hover:text-ink">
            {FOOTER.imprint}
          </a>
          <a href={`${BASE_PATH}${SITE.legal.privacyPath}`} className="hover:text-ink">
            {FOOTER.privacy}
          </a>
          <span>
            © {new Date().getFullYear()} {SITE.brandName}
          </span>
        </div>
      </div>
      <p
        aria-hidden
        className="pointer-events-none -mb-[0.18em] px-5 font-display text-[18vw] font-bold leading-[0.8] tracking-[-0.05em] text-ink/[0.04] select-none sm:px-8"
      >
        {SITE.brandName}
      </p>
    </footer>
  );
}
