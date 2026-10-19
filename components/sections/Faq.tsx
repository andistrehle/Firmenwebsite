import { Plus } from "lucide-react";
import { FAQ } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeading tag={FAQ.tag} headline={FAQ.headline} />
      <div className="mx-auto max-w-2xl space-y-2.5">
        {FAQ.items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-line bg-panel px-5 py-4 open:border-copper/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-ink [&::-webkit-details-marker]:hidden">
              {item.question}
              <Plus
                className="size-5 shrink-0 text-ink-faint transition-transform group-open:rotate-45 group-open:text-copper-lit"
                aria-hidden
              />
            </summary>
            <p className="mt-3 pr-8 leading-relaxed text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
