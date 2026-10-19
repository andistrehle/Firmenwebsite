import { ArrowRight } from "lucide-react";
import { AUDIENCES } from "@/lib/content";
import { BASE_PATH } from "@/lib/site-config";
import { ICONS } from "../ui/icons";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/** Weiche unter dem Hero: Kanzleien bleiben auf der Startseite, die anderen führen auf Unterseiten. */
export default function Audiences() {
  return (
    <Section id="zielgruppen">
      <SectionHeading tag={AUDIENCES.tag} headline={AUDIENCES.headline} />
      <div className="grid gap-4 md:grid-cols-3">
        {AUDIENCES.items.map((item) => {
          const Icon = ICONS[item.icon];
          const href = item.href.startsWith("#") ? item.href : `${BASE_PATH}${item.href}`;
          return (
            <a
              key={item.title}
              href={href}
              className={`group flex flex-col rounded-3xl border p-7 transition-colors sm:p-8 ${item.highlight ? "border-copper/40 bg-gradient-to-br from-copper-deep/40 to-panel" : "glass hover:border-copper/30"}`}
            >
              <div
                className={`inline-flex size-12 items-center justify-center rounded-2xl ${item.highlight ? "bg-gradient-to-br from-copper to-copper-lit text-ink" : "bg-copper/15 text-copper-lit"}`}
              >
                <Icon className="size-5.5" strokeWidth={1.6} aria-hidden />
              </div>
              <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{item.text}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ink group-hover:text-copper-lit">
                {item.linkLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
