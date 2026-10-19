import { ArrowUpRight } from "lucide-react";
import { REFERENCES } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function References() {
  return (
    <Section id="referenzen">
      <SectionHeading tag={REFERENCES.tag} headline={REFERENCES.headline} intro={REFERENCES.intro} />
      <div className="grid gap-4 md:grid-cols-2">
        {REFERENCES.items.map((ref) => (
          <article key={ref.title} className="glass flex flex-col rounded-3xl p-8">
            <span className="w-fit rounded-full border border-copper/40 px-3 py-1 text-xs text-copper-lit">
              {ref.tag}
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">{ref.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{ref.text}</p>
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-1 text-[15px] font-medium text-ink underline-offset-4 hover:text-copper-lit hover:underline"
              >
                {REFERENCES.linkLabel}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
