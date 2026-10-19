import { PROCESS } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";
import { ICONS } from "../ui/icons";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/** Ablauf der kostenlosen Demo als Zeitstrahl. */
export default function Process() {
  return (
    <Section id="ablauf" tone="alt">
      <SectionHeading tag={PROCESS.tag} headline={PROCESS.headline} intro={PROCESS.intro} />

      <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
        {/* Linie mit Punkten, nur ab Tablet-Breite; glimmt zum Ziel hin auf */}
        <div
          aria-hidden
          className="absolute inset-x-[16.6%] top-0 hidden h-px bg-gradient-to-r from-line via-copper/60 to-copper-lit md:block"
        />
        {PROCESS.steps.map((step, i) => {
          const Icon = ICONS[step.icon];
          const last = i === PROCESS.steps.length - 1;
          return (
            <li key={step.title} className="relative text-center md:pt-14">
              <span
                aria-hidden
                className={`absolute left-1/2 top-0 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full md:block ${last ? "bg-copper-lit shadow-[0_0_16px] shadow-copper-lit" : "bg-ink-faint"}`}
              />
              <div
                className={`mx-auto inline-flex size-16 items-center justify-center rounded-2xl ${last ? "bg-gradient-to-br from-copper to-copper-lit text-on-copper" : "glass text-ink-soft"}`}
              >
                <Icon className="size-6" strokeWidth={1.6} aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          );
        })}
      </ol>

      <div className="mt-14 text-center">
        <ButtonLink href="#kontakt">{PROCESS.cta}</ButtonLink>
      </div>
    </Section>
  );
}
