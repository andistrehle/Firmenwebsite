"use client";

import type { FormEvent } from "react";
import { CalendarDays, Mail } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { BASE_PATH, SITE } from "@/lib/site-config";
import ButtonLink from "../ui/ButtonLink";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const inputClass =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-soft/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

/** Kontaktformular. Sendet bewusst per mailto, bis ein Server-Versand eingerichtet ist. */
export default function Contact() {
  const f = CONTACT.form;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${f.name}: ${data.get("name")}`,
      `${f.firm}: ${data.get("firm")}`,
      `${f.email}: ${data.get("email")}`,
      `${f.website}: ${data.get("website") || "-"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      f.subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Section id="kontakt">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow={CONTACT.eyebrow}
            headline={CONTACT.headline}
            intro={CONTACT.intro}
            align="left"
          />
          <div className="-mt-4 space-y-4">
            {SITE.bookingUrl && (
              <ButtonLink href={SITE.bookingUrl} external variant="secondary">
                <CalendarDays className="size-4" aria-hidden />
                {CONTACT.bookingCta}
              </ButtonLink>
            )}
            <p className="text-ink-soft">
              {CONTACT.emailLabel}{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-strong"
              >
                <Mail className="size-4" aria-hidden />
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-line bg-surface-alt p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={f.name} name="name" required autoComplete="name" />
            <Field label={f.firm} name="firm" required autoComplete="organization" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={f.email} name="email" type="email" required autoComplete="email" />
            <Field label={f.website} name="website" type="url" autoComplete="url" />
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy">{f.message}</span>
            <textarea
              name="message"
              rows={4}
              placeholder={f.messagePlaceholder}
              className={inputClass}
            />
          </label>
          <p className="text-sm text-ink-soft">
            {f.privacyNote}{" "}
            <a href={`${BASE_PATH}${SITE.legal.privacyPath}`} className="underline hover:text-navy">
              {f.privacyLink}
            </a>
            .
          </p>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong sm:w-auto"
          >
            {f.submit}
          </button>
          <p className="text-xs text-ink-soft">{f.mailtoNote}</p>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </label>
  );
}
