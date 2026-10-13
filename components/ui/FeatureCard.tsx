import { ICONS } from "./icons";
import type { Feature } from "@/lib/content";

/** Karte mit Icon, Titel und Text. */
export default function FeatureCard({ icon, title, text }: Feature) {
  const Icon = ICONS[icon];
  return (
    <div className="rounded-xl bg-surface-alt p-7">
      <div className="mb-6 inline-flex size-11 items-center justify-center rounded-lg bg-surface text-ink">
        <Icon className="size-5" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="text-lg font-medium tracking-tight text-ink hyphens-auto">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink-soft hyphens-auto">{text}</p>
    </div>
  );
}
