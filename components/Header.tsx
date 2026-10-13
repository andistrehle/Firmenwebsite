"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADER, NAV } from "@/lib/content";
import { BOOKING_HREF, BOOKING_IS_EXTERNAL } from "@/lib/site-config";
import ButtonLink from "./ui/ButtonLink";
import Wordmark from "./ui/Wordmark";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Zur Startseite">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={BOOKING_HREF} external={BOOKING_IS_EXTERNAL} className="py-2.5">
            {HEADER.cta}
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? HEADER.menuClose : HEADER.menuOpen}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface px-5 pb-6 pt-2 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 font-medium text-navy"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href={BOOKING_HREF}
            external={BOOKING_IS_EXTERNAL}
            className="mt-5 w-full"
          >
            {HEADER.cta}
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
