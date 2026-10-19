"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADER, NAV } from "@/lib/content";
import ButtonLink from "./ui/ButtonLink";
import Wordmark from "./ui/Wordmark";

/** Logo links, Navigation als Glas-Kapsel in der Mitte, helle Pille rechts. */
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-surface via-surface/85 to-surface/0 pb-2">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" aria-label="Zur Startseite">
          <Wordmark />
        </a>

        <nav aria-label="Hauptnavigation" className="glass hidden rounded-xl p-1 lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-lg bg-ink/5 px-3.5 py-2 text-[13.5px] text-ink/80 transition-colors hover:bg-ink/15 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ButtonLink href="#kontakt" variant="light" className="hidden text-[13.5px] sm:inline-flex">
            {HEADER.cta}
          </ButtonLink>
          <button
            type="button"
            className="glass inline-flex size-10 items-center justify-center rounded-xl text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? HEADER.menuClose : HEADER.menuOpen}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Hauptnavigation mobil"
          className="fixed inset-x-3 top-20 rounded-2xl border border-line bg-surface/95 p-4 backdrop-blur-xl lg:hidden"
        >
          <ul className="mb-3 grid gap-0.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-ink/90 hover:bg-ink/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div onClick={() => setOpen(false)}>
            <ButtonLink href="#kontakt" className="w-full justify-between">
              {HEADER.cta}
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
