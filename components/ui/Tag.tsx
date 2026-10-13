/** Kleines Label-Kästchen über Überschriften. */
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-[4px] bg-surface-deep px-2 py-1 text-[13px] leading-none text-ink">
      {children}
    </span>
  );
}
