"use client";

import type { FormEvent } from "react";
import { CalendarDays, Check } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { BASE_PATH, SITE } from "@/lib/site-config";
import ButtonLink from "../ui/ButtonLink";
import Section from "../ui/Section";
import Tag from "../ui/Tag";

const inputClass =
  "w-full rounded-xl border border-line bg-surface/70 px-4 py-3.5 text-ink placeholder:text-ink-faint focus:border-copper/60 focus:outline-none focus:ring-2 focus:ring-copper/20";

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
    <Section id="kontakt" tone="ember">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Tag>{CONTACT.tag}</Tag>
          <h2 className="mt-4 font-display text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.04em] text-balance text-ink sm:text-[4rem]">
            {CONTACT.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{CONTACT.intro}</p>
          <ul className="mt-6 space-y-4">
            {CONTACT.checklist.map((item) => (
              <li key={item} className="flex items-center gap-4 text-ink-soft">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-copper/20 text-copper-lit">
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
              <a href={`mailto:${SITE.email}`} className="font-medium text-ink underline-offset-4 hover:text-copper-lit hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass space-y-5 rounded-3xl p-6 sm:p-8">
          <Field label={f.name} name="name" required autoComplete="name" />
          <Field label={f.email} name="email" type="email" required autoComplete="email" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={f.firm} name="firm" required autoComplete="organization" />
            <Field label={f.website} placeholder={f.websitePlaceholder} name="website" type="url" autoComplete="url" />
          </div>
          <label className="block">
            <span className="mb-2 block text-sm text-ink-soft">{f.message}</span>
            <textarea name="message" rows={4} placeholder={f.messagePlaceholder} className={inputClass} />
          </label>
          <p className="text-sm text-ink-soft">
            {f.privacyNote}{" "}
            <a href={`${BASE_PATH}${SITE.legal.privacyPath}`} className="underline hover:text-copper-lit">
              {f.privacyLink}
            </a>
            .
          </p>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-copper to-copper-lit px-6 py-3.5 text-[15px] font-semibold text-ink shadow-[0_14px_40px_-12px] shadow-copper/60 transition-all hover:-translate-y-0.5"
          >
            {f.submit}
          </button>
          <p className="text-center text-xs text-ink-faint">{f.mailtoNote}</p>
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
      <span className="mb-2 block text-sm text-ink-soft">
        {label}
        {required && <span className="text-copper-lit"> *</span>}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className={inputClass} />
    </label>
  );
}
