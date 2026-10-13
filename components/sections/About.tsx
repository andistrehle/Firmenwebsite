import { ABOUT } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <Section id="ueber-uns">
      <SectionHeading eyebrow={ABOUT.eyebrow} headline={ABOUT.headline} intro={ABOUT.intro} />
      <div className="grid gap-6 md:grid-cols-2">
        {ABOUT.people.map((person) => (
          <article key={person.name} className="rounded-2xl border border-line p-7">
            <div className="flex items-center gap-4">
              {/* Platzhalter bis zum Portraitfoto */}
              <div
                aria-hidden
                className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-surface-alt text-lg font-semibold text-navy"
              >
                {person.initials}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">{person.name}</h3>
                <p className="text-sm text-accent">{person.role}</p>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-ink-soft">{person.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
