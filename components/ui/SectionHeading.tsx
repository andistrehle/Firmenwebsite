/** Einheitliche Abschnitts-Überschrift mit optionaler Einleitung. */
export default function SectionHeading({
  eyebrow,
  headline,
  intro,
  align = "center",
  onDark = false,
}: {
  eyebrow?: string;
  headline: string;
  intro?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`mb-12 max-w-2xl sm:mb-16 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wider ${onDark ? "text-accent-soft" : "text-accent"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${onDark ? "text-white" : "text-navy"}`}
      >
        {headline}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg text-pretty ${onDark ? "text-white/75" : "text-ink-soft"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
