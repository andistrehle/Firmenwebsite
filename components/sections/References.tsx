import { ArrowUpRight } from "lucide-react";
import { REFERENCES } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";

export default function References() {
  return (
    <Section id="referenzen">
      <SectionHeading tag={REFERENCES.tag} headline={REFERENCES.headline} intro={REFERENCES.intro} />
      <div className="grid gap-4 md:grid-cols-2">
        {REFERENCES.items.map((ref) => (
          <article key={ref.title} className="flex flex-col rounded-xl bg-surface-alt p-8">
            <div>
              <Tag>{ref.tag}</Tag>
            </div>
            <h3 className="mt-6 text-xl font-medium tracking-tight text-ink">{ref.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{ref.text}</p>
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-1 text-[15px] font-medium text-ink underline-offset-4 hover:underline"
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
