import type { Chip } from "@/lib/content";
import { ICONS } from "./icons";

/** Glas-Kärtchen, das über Bildflächen schwebt. */
export default function GlassChip({ icon, title, text, className = "" }: Chip & { className?: string }) {
  const Icon = ICONS[icon];
  return (
    <div className={`glass flex items-center bg-panel/85 gap-3 rounded-2xl px-4 py-3 shadow-2xl ${className}`}>
      <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-copper/20 text-copper-lit">
        <Icon className="size-4.5" aria-hidden />
      </div>
      <div className="leading-tight">
        <p className="text-[15px] font-medium text-ink">{title}</p>
        <p className="mt-0.5 text-[13px] text-ink-soft">{text}</p>
      </div>
    </div>
  );
}
