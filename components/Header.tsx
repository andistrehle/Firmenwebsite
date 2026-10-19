"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HEADER, NAV } from "@/lib/content";
import { BASE_PATH } from "@/lib/site-config";
import ButtonLink from "./ui/ButtonLink";
import { Logo } from "@/brand/Logo";

/** Sprungmarken immer auf die Startseite beziehen, damit sie auch von Unterseiten funktionieren. */
const home = (anchor: string) => `${BASE_PATH}/${anchor}`;

/**
 * Schwebende Navigation als Pille über die volle Breite, transparent mit Glas-Unschärfe.
 * Liegt fixiert über dem Hero, der bis an den oberen Rand reicht.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      {/* Volle Breite; leichter dunkler Verlauf links und rechts, Mitte transparenter */}
      <div className="flex h-14 w-full items-center justify-between gap-4 rounded-full border border-ink/12 bg-gradient-to-r from-surface/70 via-surface/25 to-surface/70 py-2 pr-2 pl-5 shadow-[0_10px_40px_-12px] shadow-surface backdrop-blur-xl sm:pl-7">
        <a href={`${BASE_PATH}/`} aria-label="Zur Startseite" className="flex shrink-0 items-center">
          <Logo variant="hell" size={28} />
        </a>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-2 xl:gap-5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={home(item.href)}
                  className="inline-flex rounded-full px-3.5 py-2 text-[14px] text-ink-soft transition-colors hover:bg-ink/10 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <ButtonLink href={home("#kontakt")} variant="light" className="py-2! text-[13.5px]">
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
          className="mt-2 rounded-3xl border border-ink/12 bg-surface/97 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <ul className="mb-2 grid gap-0.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={home(item.href)}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-ink/90 hover:bg-ink/5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div onClick={() => setOpen(false)}>
            <ButtonLink href={home("#kontakt")} className="w-full justify-between">
              {HEADER.cta}
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
