import { ArrowLeft, ArrowUpRight, Check, Sparkles } from "lucide-react";
import type { AudiencePageContent } from "@/lib/content";
import { BASE_PATH } from "@/lib/site-config";
import Footer from "../Footer";
import Header from "../Header";
import ButtonLink from "../ui/ButtonLink";
import FeatureCard from "../ui/FeatureCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";

/** Gemeinsame Vorlage für die Zielgruppen-Unterseiten (Unternehmen, Vereine). */
export default function AudiencePage({ content: c }: { content: AudiencePageContent }) {
  const contact = `${BASE_PATH}/#kontakt`;
  return (
    <>
      <Header />
      <main>
        <section className="bg-ember relative overflow-hidden">
          <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 sm:px-8 lg:pt-40 lg:pb-32">
            <a
              href={`${BASE_PATH}/`}
              className="inline-flex animate-rise items-center gap-1.5 text-sm text-ink-faint hover:text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden />
              {c.back}
            </a>
            <div className="mt-10 max-w-3xl">
              <Tag>{c.tag}</Tag>
              <h1 className="mt-5 animate-rise font-display text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.035em] text-balance text-ink [animation-delay:60ms] sm:text-6xl xl:text-7xl">
                {c.headline.before}{" "}
                <em className="font-serif font-normal tracking-[-0.01em] text-copper-lit">{c.headline.accent}</em>{" "}
                {c.headline.after}
              </h1>
              <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-ink-soft [animation-delay:140ms]">
                {c.intro}
              </p>
              <div className="mt-9 animate-rise [animation-delay:200ms]">
                <ButtonLink href={contact}>{c.cta.button}</ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <Section>
          <SectionHeading tag={c.offersTag} headline={c.offersHeadline} />
          <div className="grid gap-4 md:grid-cols-3">
            {c.offers.map((offer) => (
              <FeatureCard key={offer.title} {...offer} />
            ))}
          </div>
        </Section>

        <Section tone="alt">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <h2 className="font-display text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-[3.2rem]">
              {c.tasksHeadline}
            </h2>
            <div>
              <ul className="space-y-3">
                {c.tasks.map((task) => (
                  <li key={task} className="glass flex items-center gap-4 rounded-2xl px-5 py-4 text-ink">
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-copper/20 text-copper-lit">
                      <Check className="size-4" aria-hidden />
                    </span>
                    {task}
                  </li>
                ))}
              </ul>
              {c.aiNote && (
                <p className="mt-6 flex gap-3 text-sm leading-relaxed text-ink-faint">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-copper-lit" aria-hidden />
                  {c.aiNote}
                </p>
              )}
            </div>
          </div>
        </Section>

        {c.reference && (
          <Section>
            <article className="glass mx-auto flex max-w-3xl flex-col rounded-3xl p-8 sm:p-10">
              <span className="w-fit rounded-full border border-copper/40 px-3 py-1 text-xs text-copper-lit">
                {c.reference.tag}
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {c.reference.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{c.reference.text}</p>
              <a
                href={c.reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-1 text-[15px] font-medium text-ink underline-offset-4 hover:text-copper-lit hover:underline"
              >
                {c.reference.linkLabel}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </article>
          </Section>
        )}

        <Section tone="ember">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.035em] text-balance text-ink sm:text-6xl">
              {c.cta.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{c.cta.text}</p>
            <ButtonLink href={contact} className="mt-9">
              {c.cta.button}
            </ButtonLink>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
