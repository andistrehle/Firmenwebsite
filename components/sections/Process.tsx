import { PROCESS } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";
import { ICONS } from "../ui/icons";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/** Ablauf der kostenlosen Demo als Zeitstrahl. */
export default function Process() {
  return (
    <Section id="ablauf">
      <SectionHeading tag={PROCESS.tag} headline={PROCESS.headline} intro={PROCESS.intro} />

      <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
        {/* Linie mit Punkten, nur ab Tablet-Breite */}
        <div aria-hidden className="absolute inset-x-[16.6%] top-0 hidden h-px bg-ink-faint md:block" />
        {PROCESS.steps.map((step, i) => {
          const Icon = ICONS[step.icon];
          const last = i === PROCESS.steps.length - 1;
          return (
            <li key={step.title} className="relative text-center md:pt-14">
              <span
                aria-hidden
                className={`absolute left-1/2 top-0 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full md:block ${last ? "bg-surface-deep ring-1 ring-ink-faint" : "bg-ink"}`}
              />
              <div
                className={`mx-auto inline-flex size-16 items-center justify-center rounded-xl ${last ? "bg-surface-alt text-ink" : "bg-panel text-surface"}`}
              >
                <Icon className="size-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-tight text-ink">{step.title}</h3>
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
