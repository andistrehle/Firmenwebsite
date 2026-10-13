import type { Chip } from "@/lib/content";
import { ICONS } from "./icons";

/** Halbtransparentes dunkles Info-Kärtchen, das über Bildflächen schwebt. */
export default function GlassChip({ icon, title, text, className = "" }: Chip & { className?: string }) {
  const Icon = ICONS[icon];
  return (
    <div
      className={`flex items-center gap-3 rounded-xl bg-panel/75 px-4 py-3 text-surface shadow-lg backdrop-blur-md ${className}`}
    >
      <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface/15">
        <Icon className="size-4.5" aria-hidden />
      </div>
      <div className="leading-tight">
        <p className="text-[15px] font-medium">{title}</p>
        <p className="mt-0.5 text-[13px] text-surface/70">{text}</p>
      </div>
    </div>
  );
}
