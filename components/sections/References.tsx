import { ExternalLink } from "lucide-react";
import { REFERENCES } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function References() {
  return (
    <Section id="referenzen">
      <SectionHeading
        eyebrow={REFERENCES.eyebrow}
        headline={REFERENCES.headline}
        intro={REFERENCES.intro}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {REFERENCES.items.map((ref) => (
          <article key={ref.title} className="flex flex-col rounded-2xl border border-line p-7">
            <span className="w-fit rounded-full bg-surface-alt px-3 py-1 text-xs font-semibold text-ink-soft">
              {ref.tag}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-navy">{ref.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{ref.text}</p>
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong"
              >
                {REFERENCES.linkLabel}
                <ExternalLink className="size-4" aria-hidden />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
