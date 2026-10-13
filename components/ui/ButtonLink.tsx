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
  variant?: "primary" | "text";
  external?: boolean;
  className?: string;
}) {
  const variantClass = {
    primary: "rounded-lg bg-ink px-6 py-3.5 text-surface hover:bg-panel-hover",
    text: "px-2 py-3.5 text-ink-soft hover:text-ink",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${variantClass} ${className}`}
    >
      {children}
    </a>
  );
}
