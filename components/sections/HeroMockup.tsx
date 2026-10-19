import { HERO } from "@/lib/content";
import GlassChip from "../ui/GlassChip";

/**
 * Gezeichneter Entwurf einer Kanzlei-Website als Hero-Bild.
 * Bewusst kein Stockfoto: zeigt, was wir bauen, statt fremder Gesichter.
 */
export default function HeroMockup() {
  const m = HERO.mockup;
  const [chipTop, chipBottom] = HERO.chips;
  return (
    <div className="relative mx-auto w-full max-w-lg pt-10 pb-12">
      {/* Browserfenster mit heller Kanzlei-Website */}
      <div
        aria-hidden
        className="overflow-hidden rounded-2xl bg-paper shadow-[0_40px_120px_-30px] shadow-copper/50 ring-1 ring-ink/10"
      >
        <div className="flex items-center gap-1.5 border-b border-paper-ink/10 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-paper-ink/15" />
          <span className="size-2.5 rounded-full bg-paper-ink/15" />
          <span className="size-2.5 rounded-full bg-paper-ink/15" />
          <span className="ml-3 rounded bg-paper-ink/5 px-3 py-0.5 text-[11px] text-paper-ink/50">
            {m.url}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-semibold tracking-tight text-paper-ink">{m.firm}</span>
            <span className="flex gap-2">
              <span className="h-1.5 w-8 rounded-full bg-paper-ink/10" />
              <span className="h-1.5 w-8 rounded-full bg-paper-ink/10" />
              <span className="h-1.5 w-8 rounded-full bg-paper-ink/10" />
            </span>
          </div>
          <p className="mt-9 max-w-[15rem] font-display text-3xl font-semibold leading-[1.02] tracking-[-0.035em] text-paper-ink">
            {m.headline}
          </p>
          <div className="mt-4 h-1.5 w-3/5 rounded-full bg-paper-ink/10" />
          <div className="mt-2 h-1.5 w-2/5 rounded-full bg-paper-ink/10" />
          <span className="mt-6 inline-block rounded-full bg-paper-ink px-4 py-2 text-[11px] font-medium text-paper">
            {m.cta}
          </span>
          <div className="mt-8 grid grid-cols-3 gap-2">
            {m.areas.map((area) => (
              <div key={area} className="rounded-lg bg-paper-ink/5 px-2.5 py-3 text-[11px] text-paper-ink/70">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>

      <GlassChip {...chipTop} className="absolute -right-2 top-0 sm:-right-8" />
      <GlassChip {...chipBottom} className="absolute bottom-0 -left-2 sm:-left-10" />
    </div>
  );
}
