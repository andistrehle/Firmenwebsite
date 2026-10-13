import { Check } from "lucide-react";
import { SERVICES, SERVICE_STATUS_LABEL, type ServiceStatus } from "@/lib/content";
import { ICONS } from "../ui/icons";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const STATUS_CLASS: Record<ServiceStatus, string> = {
  verfügbar: "bg-accent-soft text-accent",
  entwicklung: "bg-surface-alt text-ink-soft",
};

export default function Services() {
  return (
    <Section id="leistungen" tone="alt">
      <SectionHeading
        eyebrow={SERVICES.eyebrow}
        headline={SERVICES.headline}
        intro={SERVICES.intro}
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {SERVICES.items.map((service) => {
          const Icon = ICONS[service.icon];
          const available = service.status === "verfügbar";
          return (
            <article
              key={service.title}
              className={`flex flex-col rounded-2xl border bg-surface p-7 ${available ? "border-accent/40 shadow-sm" : "border-line"}`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={`inline-flex size-11 items-center justify-center rounded-xl ${available ? "bg-navy text-white" : "bg-surface-alt text-navy"}`}
                >
                  <Icon className="size-5" aria-hidden />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_CLASS[service.status]}`}
                >
                  {SERVICE_STATUS_LABEL[service.status]}
                </span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                {service.stage}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-navy">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{service.text}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              {service.price && (
                <div className="mt-auto pt-6">
                  <p className="text-2xl font-semibold text-navy">{service.price}</p>
                  {service.priceNote && (
                    <p className="mt-1 text-sm text-ink-soft">{service.priceNote}</p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
