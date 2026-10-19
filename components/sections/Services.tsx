"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SERVICES, SERVICE_STATUS_LABEL } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";
import { ICONS } from "../ui/icons";
import Section from "../ui/Section";
import Tag from "../ui/Tag";

/** Leistungen als Akkordeon links, Glut-Fläche mit Häkchen-Kärtchen rechts. */
export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES.items[active];

  return (
    <Section id="leistungen">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Tag>{SERVICES.tag}</Tag>
          <h2 className="mt-4 mb-10 font-display text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-[3.4rem]">
            {SERVICES.headline}
          </h2>

          <div className="space-y-3">
            {SERVICES.items.map((service, i) => {
              const Icon = ICONS[service.icon];
              const open = i === active;
              return (
                <div
                  key={service.title}
                  className={`rounded-2xl border transition-colors ${open ? "border-copper/40 bg-gradient-to-br from-copper-deep/40 to-panel" : "border-line bg-panel hover:border-line-strong"}`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <Icon
                      className={`size-5 shrink-0 ${open ? "text-copper-lit" : "text-ink-faint"}`}
                      strokeWidth={1.6}
                      aria-hidden
                    />
                    <span className="flex-1 font-display text-lg font-semibold tracking-tight text-ink">
                      {service.title}
                    </span>
                    <span className="text-xs text-ink-soft">
                      {service.stage} · {SERVICE_STATUS_LABEL[service.status]}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-ink-soft">{service.text}</p>
                      {service.price && (
                        <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="font-display text-2xl font-semibold text-ink">{service.price}</span>
                          <span className="text-sm text-ink-faint">{service.priceNote}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <ButtonLink href="#kontakt" className="mt-9">
            {SERVICES.cta}
          </ButtonLink>
        </div>

        {/* Glut-Fläche: Häkchen-Kärtchen zur gewählten Stufe */}
        <div className="bg-ember relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-line p-8">
          <div className="w-full max-w-sm space-y-4" aria-live="polite">
            {current.highlights.map((item, i) => (
              <div
                key={item}
                className={`glass flex items-center gap-3 rounded-2xl px-4 py-3.5 shadow-2xl ${["mr-10", "ml-10", "mr-4"][i % 3]}`}
              >
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-lg bg-copper/25 text-copper-lit">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="text-[15px] font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
