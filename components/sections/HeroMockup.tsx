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
    <div className="relative aspect-[5/5.2] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-surface-deep via-ink-faint/60 to-panel p-6 sm:p-10">
      {/* Browserfenster */}
      <div
        aria-hidden
        className="absolute inset-x-6 top-20 bottom-24 overflow-hidden rounded-xl bg-surface shadow-2xl sm:inset-x-10 sm:top-24"
      >
        <div className="flex items-center gap-1.5 border-b border-line bg-surface-alt px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-surface-deep" />
          <span className="size-2.5 rounded-full bg-surface-deep" />
          <span className="size-2.5 rounded-full bg-surface-deep" />
          <span className="ml-3 rounded bg-surface px-3 py-0.5 text-[11px] text-ink-faint">
            {m.url}
          </span>
        </div>
        <div className="p-5 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium tracking-tight text-ink">{m.firm}</span>
            <span className="flex gap-2">
              <span className="h-1.5 w-8 rounded-full bg-surface-deep" />
              <span className="h-1.5 w-8 rounded-full bg-surface-deep" />
              <span className="h-1.5 w-8 rounded-full bg-surface-deep" />
            </span>
          </div>
          <p className="mt-8 max-w-[14rem] text-2xl font-medium leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
            {m.headline}
          </p>
          <div className="mt-3 h-1.5 w-3/5 rounded-full bg-surface-deep" />
          <div className="mt-2 h-1.5 w-2/5 rounded-full bg-surface-deep" />
          <span className="mt-6 inline-block rounded-md bg-ink px-3 py-2 text-[11px] font-medium text-surface">
            {m.cta}
          </span>
          <div className="mt-8 grid grid-cols-3 gap-2">
            {m.areas.map((area) => (
              <div key={area} className="rounded-md bg-surface-alt px-2 py-3 text-[11px] text-ink-soft">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>

      <GlassChip {...chipTop} className="absolute right-4 top-5 sm:right-6 sm:top-7" />
      <GlassChip {...chipBottom} className="absolute bottom-6 left-4 sm:bottom-8 sm:left-6" />
    </div>
  );
}
