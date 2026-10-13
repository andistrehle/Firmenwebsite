import Tag from "./Tag";

/** Einheitliche Abschnitts-Überschrift: Label, große Headline, optionale Einleitung. */
export default function SectionHeading({
  tag,
  headline,
  intro,
  align = "center",
}: {
  tag?: string;
  headline: string;
  intro?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`mb-12 max-w-2xl sm:mb-16 ${alignClass}`}>
      {tag && <Tag>{tag}</Tag>}
      <h2 className="mt-4 text-[2rem] font-medium leading-[1.1] tracking-[-0.03em] text-balance text-ink sm:text-5xl">
        {headline}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-soft">{intro}</p>}
    </div>
  );
}
