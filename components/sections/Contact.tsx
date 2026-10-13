"use client";

import type { FormEvent } from "react";
import { CalendarDays, Check } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { BASE_PATH, SITE } from "@/lib/site-config";
import ButtonLink from "../ui/ButtonLink";
import Section from "../ui/Section";
import Tag from "../ui/Tag";

const inputClass =
  "w-full rounded-lg bg-surface px-4 py-3.5 text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-ink/20";

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
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Tag>{CONTACT.tag}</Tag>
          <h2 className="mt-4 text-[2.4rem] font-medium leading-[1.05] tracking-[-0.035em] text-balance text-ink sm:text-[3.4rem]">
            {CONTACT.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{CONTACT.intro}</p>
          <ul className="mt-6 space-y-4">
            {CONTACT.checklist.map((item) => (
              <li key={item} className="flex items-center gap-4 text-ink-soft">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-surface-deep text-ink">
                  <Check className="size-4" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-3">
            {SITE.bookingUrl && (
              <ButtonLink href={SITE.bookingUrl} external>
                <CalendarDays className="size-4" aria-hidden />
                {CONTACT.bookingCta}
              </ButtonLink>
            )}
            <p className="text-ink-soft">
              {CONTACT.emailLabel}{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-ink underline-offset-4 hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-surface-alt p-6 sm:p-8">
          <Field label={f.name} name="name" required autoComplete="name" />
          <Field label={f.email} name="email" type="email" required autoComplete="email" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={f.firm} name="firm" required autoComplete="organization" />
            <Field label={f.website} placeholder={f.websitePlaceholder} name="website" type="url" autoComplete="url" />
          </div>
          <label className="block">
            <span className="mb-2 block text-ink">{f.message}</span>
            <textarea name="message" rows={4} placeholder={f.messagePlaceholder} className={inputClass} />
          </label>
          <p className="text-sm text-ink-soft">
            {f.privacyNote}{" "}
            <a href={`${BASE_PATH}${SITE.legal.privacyPath}`} className="underline hover:text-ink">
              {f.privacyLink}
            </a>
            .
          </p>
          <button
            type="submit"
            className="w-full rounded-lg bg-ink px-6 py-3.5 text-[15px] font-medium text-surface transition-colors hover:bg-panel-hover"
          >
            {f.submit}
          </button>
          <p className="text-center text-xs text-ink-soft">{f.mailtoNote}</p>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  placeholder,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-ink">
        {label}
        {required && <span className="text-ink-soft"> *</span>}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className={inputClass} />
    </label>
  );
}
