import { ABOUT } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <Section id="ueber-uns" tone="ember">
      <SectionHeading tag={ABOUT.tag} headline={ABOUT.headline} intro={ABOUT.intro} />

      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        {ABOUT.people.map((person) => (
          <article key={person.name} className="glass flex flex-col rounded-3xl p-7 sm:p-8">
            <div className="flex items-center gap-4">
              {/* Platzhalter bis zum Portraitfoto */}
              <div
                aria-hidden
                className="inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-copper to-copper-deep font-display text-xl font-semibold text-ink"
              >
                {person.initials}
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">{person.name}</p>
                <p className="text-sm text-ink-faint">{person.role}</p>
              </div>
            </div>
            <p className="mt-7 font-display text-xl font-medium leading-snug tracking-tight text-ink">
              {person.lead}
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">{person.text}</p>
          </article>
        ))}
      </div>

      <figure className="mx-auto mt-20 max-w-3xl text-center">
        <blockquote className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-balance text-ink sm:text-[2.1rem]">
          „{ABOUT.statement}“
        </blockquote>
        <figcaption className="mt-5 text-sm text-ink-faint">{ABOUT.statementLabel}</figcaption>
      </figure>
    </Section>
  );
}
