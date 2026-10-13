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
    <Section id="beispiel">
      <SectionHeading eyebrow={DEMO.eyebrow} headline={DEMO.headline} intro={DEMO.intro} />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Anfragestrecke, wie sie der Mandant sieht */}
        <div className="flex flex-col rounded-2xl border border-line bg-surface-alt p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="font-semibold text-navy">{DEMO.formTitle}</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs text-ink-soft">
              <Info className="size-3.5" aria-hidden />
              {DEMO.notice}
            </span>
          </div>

          <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-line">
            <div
              className="h-full rounded-full bg-accent transition-all duration-500"
              style={{ width: `${(Math.max(answered, 0) / total) * 100}%` }}
            />
          </div>

          <ol className="flex-1 space-y-3" aria-live="polite">
            {DEMO.steps.slice(0, Math.max(answered, 0)).map((step) => (
              <li key={step.question} className="rounded-xl bg-surface p-4">
                <p className="text-sm text-ink-soft">{step.question}</p>
                <p className="mt-1 flex items-center gap-2 font-medium text-navy">
                  <Check className="size-4 text-accent" aria-hidden />
                  {step.answer}
                </p>
              </li>
            ))}
            {started && !done && (
              <li className="rounded-xl border-2 border-accent bg-surface p-4">
                <p className="text-sm font-medium text-navy">{current.question}</p>
                <p className="mt-2 rounded-lg border border-line px-3 py-2 text-ink-soft">
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
              <DemoButton
                onClick={() => setAnswered((n) => n + 1)}
                icon={<ArrowRight className="size-4" />}
              >
                {DEMO.nextButton}
              </DemoButton>
            )}
            {done && (
              <DemoButton
                onClick={() => setAnswered(-1)}
                icon={<RotateCcw className="size-4" />}
                variant="secondary"
              >
                {DEMO.restartButton}
              </DemoButton>
            )}
          </div>
        </div>

        {/* Zusammenfassung, wie sie bei der Kanzlei ankommt */}
        <div className="rounded-2xl bg-navy p-6 text-white sm:p-8">
          <p className="mb-6 font-semibold">{DEMO.summaryTitle}</p>
          {done ? (
            <dl className="divide-y divide-white/10">
              {DEMO.summary.map((row) => (
                <div key={row.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr]">
                  <dt className="text-sm text-white/60">{row.label}</dt>
                  <dd>
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
            <p className="text-white/60">{DEMO.summaryWaiting}</p>
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
  variant = "primary",
}: {
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const variantClass =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-strong"
      : "border border-line bg-surface text-navy hover:border-navy/30";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${variantClass}`}
    >
      {icon}
      {children}
    </button>
  );
}
