import { ICONS } from "./icons";
import type { Feature } from "@/lib/content";

/** Glaskarte mit Icon, Titel und Text. */
export default function FeatureCard({ icon, title, text }: Feature) {
  const Icon = ICONS[icon];
  return (
    <div className="glass rounded-2xl p-7">
      <div className="mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-copper/15 text-copper-lit">
        <Icon className="size-5" strokeWidth={1.6} aria-hidden />
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight text-ink hyphens-auto">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink-soft hyphens-auto">{text}</p>
    </div>
  );
}
