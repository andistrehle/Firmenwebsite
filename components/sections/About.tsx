import { ABOUT } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <Section id="ueber-uns" tone="dots">
      <SectionHeading tag={ABOUT.tag} headline={ABOUT.headline} intro={ABOUT.intro} />

      <div className="mx-auto max-w-4xl space-y-6">
        {ABOUT.people.map((person) => (
          <article key={person.name} className="grid gap-4 sm:grid-cols-[15rem_1fr]">
            {/* Platzhalter bis zum Portraitfoto */}
            <div
              aria-hidden
              className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-surface-deep to-ink-faint text-4xl font-medium tracking-tight text-surface sm:aspect-auto"
            >
              {person.initials}
            </div>
            <div className="rounded-xl bg-surface p-7 sm:p-9">
              <p className="text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
                {person.lead}
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">{person.text}</p>
              <p className="mt-6 font-medium text-ink">{person.name}</p>
              <p className="text-sm text-ink-soft">{person.role}</p>
            </div>
          </article>
        ))}
      </div>

      <figure className="mx-auto mt-20 max-w-3xl text-center">
        <blockquote className="text-2xl font-medium leading-snug tracking-[-0.02em] text-balance text-ink sm:text-[2rem]">
          „{ABOUT.statement}“
        </blockquote>
        <figcaption className="mt-5 text-sm text-ink-soft">{ABOUT.statementLabel}</figcaption>
      </figure>
    </Section>
  );
}
