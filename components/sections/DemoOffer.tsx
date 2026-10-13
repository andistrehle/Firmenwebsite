import { ArrowRight } from "lucide-react";
import { DEMO_OFFER } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function DemoOffer() {
  return (
    <Section tone="dark">
      <SectionHeading
        eyebrow={DEMO_OFFER.eyebrow}
        headline={DEMO_OFFER.headline}
        intro={DEMO_OFFER.intro}
        onDark
      />
      <ol className="grid gap-6 md:grid-cols-3">
        {DEMO_OFFER.steps.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-white/10 bg-navy-soft p-7">
            <span className="text-sm font-semibold text-accent-soft">0{i + 1}</span>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-white/70">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 text-center">
        <ButtonLink href="#kontakt" variant="onDark">
          {DEMO_OFFER.cta}
          <ArrowRight className="size-4" aria-hidden />
        </ButtonLink>
      </div>
    </Section>
  );
}
