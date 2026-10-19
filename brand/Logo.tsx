type LogoProps = {
  /** "hell" für dunklen Grund (Standard), "dunkel" für helle Flächen */
  variant?: "hell" | "dunkel";
  /** Kantenlänge der Bildmarke in Pixeln */
  size?: number;
  /** false blendet den Schriftzug aus, zeigt nur die Bildmarke */
  wordmark?: boolean;
  /** Zeile unter dem Schriftzug, z. B. "Websites · Prozesse · KI" */
  descriptor?: string;
  className?: string;
};

/**
 * Bildmarke: Schreibfeder im Umriss, drei Server-Einschübe darin,
 * der untere in Kupfer. Die Einschübe sind Aussparungen (fill-rule evenodd),
 * die Marke funktioniert daher auf jedem Grund.
 *
 * Unter 24 px verschmieren die drei Einschübe. Dort favicon.svg verwenden,
 * nicht diese Komponente verkleinern.
 */
export function LogoMark({
  variant = "hell",
  size = 40,
  className,
}: Pick<LogoProps, "variant" | "size" | "className">) {
  const koerper = variant === "hell" ? "#F7F0EA" : "#140A06";
  const akzent = variant === "hell" ? "#E3A067" : "#C6713A";

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Stift und Server"
    >
      <path
        fillRule="evenodd"
        fill={koerper}
        d="M14 8 H50 A3 3 0 0 1 53 11 V32 C53 45 44 55 32 61 C20 55 11 45 11 32 V11 A3 3 0 0 1 14 8 Z M18 19 H46 V25 H18 Z M18 30 H46 V36 H18 Z M22 41 H42 V47 H22 Z M30.6 49 H33.4 L32 58 Z"
      />
      <path fill={akzent} d="M22 41 H42 V47 H22 Z" />
    </svg>
  );
}

/**
 * Wort-Bild-Marke. Schriftzug in Inter Tight, das Und-Zeichen als Akzentwort
 * in Instrument Serif kursiv. Beide Familien müssen geladen sein.
 */
export function Logo({
  variant = "hell",
  size = 40,
  wordmark = true,
  descriptor,
  className,
}: LogoProps) {
  const schrift = variant === "hell" ? "#F7F0EA" : "#140A06";
  const akzent = variant === "hell" ? "#E3A067" : "#C6713A";
  const neben = variant === "hell" ? "#8F7F73" : "#6B5447";

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.32 }}
    >
      <LogoMark variant={variant} size={size} />
      {wordmark && (
        <span style={{ display: "flex", flexDirection: "column", gap: size * 0.12 }}>
          <span
            style={{
              fontFamily: '"Inter Tight", system-ui, sans-serif',
              fontWeight: 700,
              fontSize: size * 0.88,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              color: schrift,
              whiteSpace: "nowrap",
            }}
          >
            Stift{" "}
            <span
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: "italic",
                fontWeight: 400,
                color: akzent,
              }}
            >
              &amp;
            </span>{" "}
            Server
          </span>
          {descriptor && (
            <span
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: Math.max(13, size * 0.3),
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: neben,
              }}
            >
              {descriptor}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
