import { FOOTER } from "@/lib/content";
import { BASE_PATH, SITE } from "@/lib/site-config";
import Wordmark from "./ui/Wordmark";

export default function Footer() {
  return (
    <footer className="bg-ink text-surface/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <Wordmark onDark />
          <p className="mt-2 text-sm">{SITE.brandTagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`${BASE_PATH}${SITE.legal.imprintPath}`} className="hover:text-surface">
            {FOOTER.imprint}
          </a>
          <a href={`${BASE_PATH}${SITE.legal.privacyPath}`} className="hover:text-surface">
            {FOOTER.privacy}
          </a>
          <span>
            © {new Date().getFullYear()} {SITE.brandName}
          </span>
        </div>
      </div>
    </footer>
  );
}
