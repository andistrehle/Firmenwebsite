"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADER, NAV } from "@/lib/content";
import ButtonLink from "./ui/ButtonLink";
import Wordmark from "./ui/Wordmark";

/**
 * Schwebende Navigation als schmale Pille, transparent mit Glas-Unschärfe.
 * Liegt fixiert über dem Hero, der bis an den oberen Rand reicht.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-ink/12 bg-surface/30 py-2 pr-2 pl-5 shadow-[0_10px_40px_-12px] shadow-black/60 backdrop-blur-xl">
        <a href="#top" aria-label="Zur Startseite" className="shrink-0">
          <Wordmark />
        </a>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full px-3.5 py-2 text-[14px] text-ink/75 transition-colors hover:bg-ink/10 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <ButtonLink href="#kontakt" variant="light" className="py-2! text-[13.5px]">
              {HEADER.cta}
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-ink/10 lg:hidden"
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
          className="mx-auto mt-2 max-w-4xl rounded-3xl border border-ink/12 bg-surface/97 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <ul className="mb-2 grid gap-0.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-ink/90 hover:bg-ink/5"
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
