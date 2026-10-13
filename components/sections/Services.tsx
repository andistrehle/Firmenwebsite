"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SERVICES, SERVICE_STATUS_LABEL } from "@/lib/content";
import ButtonLink from "../ui/ButtonLink";
import { ICONS } from "../ui/icons";
import Section from "../ui/Section";
import Tag from "../ui/Tag";

/** Leistungen als Akkordeon links, Bildfläche mit Häkchen-Kärtchen rechts. */
export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES.items[active];

  return (
    <Section id="leistungen">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Tag>{SERVICES.tag}</Tag>
          <h2 className="mt-4 mb-10 text-[2rem] font-medium leading-[1.1] tracking-[-0.03em] text-balance text-ink sm:text-5xl">
            {SERVICES.headline}
          </h2>

          <div className="space-y-3">
            {SERVICES.items.map((service, i) => {
              const Icon = ICONS[service.icon];
              const open = i === active;
              return (
                <div
                  key={service.title}
                  className={`rounded-xl transition-colors ${open ? "bg-panel text-surface" : "bg-surface-alt text-ink hover:bg-surface-deep"}`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                    <span className="flex-1 text-lg font-medium tracking-tight">{service.title}</span>
                    <span
                      className={`text-xs ${open ? "text-surface/60" : "text-ink-faint"}`}
                    >
                      {service.stage} · {SERVICE_STATUS_LABEL[service.status]}
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-surface/75">{service.text}</p>
                      {service.price && (
                        <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="text-2xl font-medium">{service.price}</span>
                          <span className="text-sm text-surface/60">{service.priceNote}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <ButtonLink href="#kontakt" className="mt-8">
            {SERVICES.cta}
          </ButtonLink>
        </div>

        {/* Bildfläche: Häkchen-Kärtchen zur gewählten Stufe */}
        <div className="relative flex aspect-[5/5] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface-deep via-ink-faint/70 to-panel p-8">
          <div className="w-full max-w-sm space-y-4" aria-live="polite">
            {current.highlights.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-xl bg-panel/75 px-4 py-3.5 text-surface shadow-lg backdrop-blur-md ${["mr-10", "ml-10", "mr-4"][i % 3]}`}
              >
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-surface/20">
                  <Check className="size-4" aria-hidden />
                </span>
                <span className="text-[15px] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
