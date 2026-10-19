"use client";

import { useState } from "react";
import { ArrowRight, Check, Info, Play, RotateCcw, TriangleAlert } from "lucide-react";
import { DEMO } from "@/lib/content";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/** Interaktives Beispiel: Anfragestrecke links, Zusammenfassung für die Kanzlei rechts. */
export default function Demo() {
  // -1 = noch nicht gestartet, sonst Anzahl beantworteter Fragen
  const [answered, setAnswered] = useState(-1);
  const total = DEMO.steps.length;
  const started = answered >= 0;
  const done = answered >= total;
  const current = DEMO.steps[answered];

  return (
    <Section id="beispiel" tone="alt">
      <SectionHeading tag={DEMO.tag} headline={DEMO.headline} intro={DEMO.intro} />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Anfragestrecke, wie sie der Mandant sieht */}
        <div className="flex flex-col rounded-3xl border border-line bg-panel p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="font-display font-semibold text-ink">{DEMO.formTitle}</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1 text-xs text-ink-faint">
              <Info className="size-3.5" aria-hidden />
              {DEMO.notice}
            </span>
          </div>

          <div className="mb-6 h-1 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-gradient-to-r from-copper to-copper-lit transition-all duration-500"
              style={{ width: `${(Math.max(answered, 0) / total) * 100}%` }}
            />
          </div>

          <ol className="flex-1 space-y-2.5" aria-live="polite">
            {DEMO.steps.slice(0, Math.max(answered, 0)).map((step) => (
              <li key={step.question} className="rounded-xl bg-ink/[0.04] px-4 py-3.5">
                <p className="text-sm text-ink-faint">{step.question}</p>
                <p className="mt-1 flex items-center gap-2 text-ink">
                  <Check className="size-4 text-copper-lit" aria-hidden />
                  {step.answer}
                </p>
              </li>
            ))}
            {started && !done && (
              <li className="rounded-xl border border-copper/50 bg-copper/10 px-4 py-3.5">
                <p className="text-sm font-medium text-ink">{current.question}</p>
                <p className="mt-2 rounded-lg border border-line bg-surface/60 px-3 py-2 text-ink-soft">
                  {current.answer}
                </p>
              </li>
            )}
          </ol>

          <div className="mt-6">
            {!started && (
              <DemoButton onClick={() => setAnswered(0)} icon={<Play className="size-4" />}>
                {DEMO.startButton}
              </DemoButton>
            )}
            {started && !done && (
              <DemoButton onClick={() => setAnswered((n) => n + 1)} icon={<ArrowRight className="size-4" />}>
                {DEMO.nextButton}
              </DemoButton>
            )}
            {done && (
              <DemoButton onClick={() => setAnswered(-1)} icon={<RotateCcw className="size-4" />} quiet>
                {DEMO.restartButton}
              </DemoButton>
            )}
          </div>
        </div>

        {/* Zusammenfassung, wie sie bei der Kanzlei ankommt */}
        <div className="bg-ember rounded-3xl border border-line p-6 sm:p-8">
          <p className="mb-6 font-display font-semibold text-ink">{DEMO.summaryTitle}</p>
          {done ? (
            <dl className="glass divide-y divide-line rounded-2xl px-5">
              {DEMO.summary.map((row) => (
                <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr]">
                  <dt className="text-sm text-ink-faint">{row.label}</dt>
                  <dd className="text-ink">
                    {row.value}
                    {row.flag && (
                      <span className="mt-2 flex w-fit items-center gap-1.5 rounded-full bg-warn-soft px-2.5 py-1 text-xs font-semibold text-warn">
                        <TriangleAlert className="size-3.5" aria-hidden />
                        {DEMO.summaryFlag}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="text-ink-soft">{DEMO.summaryWaiting}</p>
          )}
        </div>
      </div>
    </Section>
  );
}

function DemoButton({
  onClick,
  icon,
  children,
  quiet = false,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
  quiet?: boolean;
}) {
  const variantClass = quiet
    ? "border border-line text-ink-soft hover:text-ink"
    : "bg-gradient-to-r from-copper to-copper-lit font-semibold text-ink";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm transition-colors ${variantClass}`}
    >
      {icon}
      {children}
    </button>
  );
}
