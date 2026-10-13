import { Check } from "lucide-react";
import { HERO } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";
import Tag from "../ui/Tag";
import HeroMockup from "./HeroMockup";

export default function Hero() {
  return (
    <section id="top" className="bg-surface pb-24 pt-10 sm:pb-32 sm:pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Tag>{HERO.tag}</Tag>
          <h1 className="mt-5 text-[2.6rem] font-medium leading-[1.05] tracking-[-0.035em] text-balance text-ink sm:text-6xl">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-pretty text-ink-soft">
            {HERO.subline}
          </p>
          <div className="mt-9 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <ButtonLink href="#kontakt">{HERO.primaryCta}</ButtonLink>
            <ButtonLink href="#leistungen" variant="text">
              {HERO.secondaryCta}
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
            {HERO.trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 text-ink" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}
