import { MapPin } from "lucide-react";
import { HERO } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";

/** Vollflächiger Hero mit Glut-Hintergrund. Blöcke gleiten gestaffelt ein (reine CSS-Animation). */
export default function Hero() {
  const h = HERO.headline;
  return (
    <section id="top" className="bg-ember relative overflow-hidden">
      {/* Verlauf von links: dunkelt hinter dem Text ab, damit der Kontrast stabil bleibt */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/35 to-transparent" />
      {/* feine senkrechte Haarlinien als Struktur */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden justify-between px-[30%] md:flex">
        <span className="w-px bg-ink/5" />
        <span className="ml-3.5 w-px bg-ink/5" />
        <span className="w-px bg-ink/5" />
      </div>

      <div className="relative mx-auto grid min-h-svh w-full max-w-7xl items-center px-5 pt-32 pb-16 sm:px-8 lg:pt-36 lg:pb-20">
        <div className="max-w-3xl">
          <p className="flex w-fit animate-rise items-center gap-2.5 border-t border-line pt-3 text-[13px] leading-snug text-ink-soft">
            <MapPin className="size-5 shrink-0" strokeWidth={1.3} aria-hidden />
            <span>
              {HERO.note[0]}
              <br />
              {HERO.note[1]}
            </span>
          </p>

          <h1 className="mt-6 animate-rise font-display text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.035em] text-balance text-ink [animation-delay:60ms] [text-shadow:0_6px_40px_var(--grund)] sm:text-7xl xl:text-[5.4rem]">
            {h.before}{" "}
            <em className="font-serif font-normal tracking-[-0.01em] text-copper-lit">{h.accent}</em>{" "}
            {h.after}
          </h1>

          <p className="mt-6 max-w-md animate-rise text-[15px] leading-relaxed text-ink-soft [animation-delay:140ms] sm:text-base">
            {HERO.subline}
          </p>

          <div className="mt-8 flex animate-rise flex-wrap items-center gap-x-5 gap-y-2 [animation-delay:200ms]">
            <ButtonLink href="#kontakt">{HERO.primaryCta}</ButtonLink>
            <ButtonLink href="#leistungen" variant="text">
              {HERO.secondaryCta}
            </ButtonLink>
          </div>

          <ul className="mt-10 grid max-w-xl animate-rise grid-cols-3 gap-2 sm:gap-3 [animation-delay:280ms]">
            {HERO.stats.map((stat, i) => (
              <li
                key={stat.label}
                className={`glass flex min-h-32 flex-col justify-between rounded-2xl p-3 sm:p-4 ${i === 1 ? "bg-gradient-to-br from-copper-deep/50 to-panel/40" : ""}`}
              >
                <span className="font-display text-xl font-medium whitespace-nowrap tracking-[-0.03em] text-ink sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-[13px] leading-snug text-ink-soft">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
