import type { ReactNode } from "react";

/** Einheitlicher Abschnitts-Wrapper mit Container und großzügigen Abständen. */
export default function Section({
  id,
  children,
  tone = "base",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "base" | "alt" | "ember";
  className?: string;
}) {
  const toneClass = {
    base: "bg-surface",
    alt: "bg-surface-alt",
    ember: "bg-ember",
  }[tone];
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-t border-line/60 py-24 sm:py-32 ${toneClass} ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
