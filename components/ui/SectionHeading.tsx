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
    <div className={`mb-14 max-w-2xl sm:mb-16 ${alignClass}`}>
      {tag && <Tag>{tag}</Tag>}
      <h2 className="mt-4 font-display text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-[3.4rem]">
        {headline}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-soft">{intro}</p>}
    </div>
  );
}
