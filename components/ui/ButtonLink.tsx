import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Link im Button-Stil.
 * - primary: Kupfer-Verlauf als Pille mit runder Pfeil-Kachel
 * - light: helle Pille (Navigation)
 * - text: schlichter Textlink
 * Externe Links öffnen in einem neuen Tab.
 */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "text";
  external?: boolean;
  className?: string;
}) {
  const variantClass = {
    primary:
      "rounded-full bg-gradient-to-r from-copper to-copper-lit py-2 pl-6 pr-2 font-semibold text-ink shadow-[0_14px_40px_-12px] shadow-copper/60 hover:-translate-y-0.5 hover:shadow-copper/80",
    light: "rounded-full bg-ink px-5 py-2.5 text-surface hover:bg-paper",
    text: "px-2 py-3 text-ink-soft hover:text-ink",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-3 text-[15px] font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-copper-lit ${variantClass} ${className}`}
    >
      {children}
      {variant === "primary" && (
        <span
          aria-hidden
          className="inline-flex size-10 items-center justify-center rounded-full bg-ink text-surface"
        >
          <ArrowRight className="size-4.5" />
        </span>
      )}
    </a>
  );
}
