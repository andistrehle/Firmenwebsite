import type { ReactNode } from "react";

/** Einheitlicher Abschnitts-Wrapper mit Container und großzügigen Abständen. */
export default function Section({
  id,
  children,
  tone = "light",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "alt" | "dots";
  className?: string;
}) {
  const toneClass = {
    light: "bg-surface",
    alt: "bg-surface-alt",
    dots: "bg-surface-alt bg-dots",
  }[tone];
  return (
    <section id={id} className={`py-24 sm:py-32 ${toneClass} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
