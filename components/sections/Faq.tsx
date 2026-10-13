import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  return (
    <Section id="faq" tone="alt">
      <SectionHeading eyebrow={FAQ.eyebrow} headline={FAQ.headline} />
      <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-surface">
        {FAQ.items.map((item) => (
          <details key={item.question} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
              {item.question}
              <ChevronDown
                className="size-5 shrink-0 text-ink-soft transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
