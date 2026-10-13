"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADER, NAV } from "@/lib/content";
import ButtonLink from "./ui/ButtonLink";
import Wordmark from "./ui/Wordmark";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center px-5 sm:px-8">
        <a href="#top" aria-label="Zur Startseite">
          <Wordmark />
        </a>

        <nav className="ml-14 hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden md:block">
          <ButtonLink href="#kontakt" className="px-4! py-2.5!">
            {HEADER.cta}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex size-10 items-center justify-center rounded-lg text-ink md:hidden"
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
              className="block border-b border-line py-3 text-ink"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href="#kontakt" className="mt-5 w-full">
            {HEADER.cta}
          </ButtonLink>
        </nav>
      )}
    </header>
  );
}
