import type { ReactNode } from "react";

/** Link im Button-Stil. Externe Links öffnen in einem neuen Tab. */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  external?: boolean;
  className?: string;
}) {
  const variantClass = {
    primary: "bg-accent text-white hover:bg-accent-strong",
    secondary: "border border-line bg-surface text-navy hover:border-navy/30",
    onDark: "bg-white text-navy hover:bg-accent-soft",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantClass} ${className}`}
    >
      {children}
    </a>
  );
}
