import { ArrowRight, Check, Sparkles } from "lucide-react";
import { HERO } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  return (
    <section id="top" className="bg-surface pb-20 pt-14 sm:pb-28 sm:pt-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
            {HERO.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-navy text-balance sm:text-5xl lg:text-6xl">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl">
            {HERO.subline}
          </p>

          <div className="mt-10 flex max-w-xl items-start gap-4 rounded-2xl border border-line bg-surface-alt p-5">
            <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
              <Sparkles className="size-5" aria-hidden />
            </div>
            <div>
              <p className="font-semibold text-navy">{HERO.offerTitle}</p>
              <p className="mt-1 text-sm text-ink-soft">{HERO.offerText}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#kontakt">
              {HERO.primaryCta}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="#beispiel" variant="secondary">
              {HERO.secondaryCta}
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            {HERO.trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
