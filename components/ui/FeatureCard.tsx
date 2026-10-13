import { ICONS } from "./icons";
import type { Feature } from "@/lib/content";

/** Karte mit Icon, Titel und Text. */
export default function FeatureCard({ icon, title, text }: Feature) {
  const Icon = ICONS[icon];
  return (
    <div className="rounded-2xl border border-line bg-surface p-7">
      <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
        <Icon className="size-5" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-navy hyphens-auto">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink-soft hyphens-auto">{text}</p>
    </div>
  );
}
