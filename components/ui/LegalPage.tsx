import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "../Footer";
import Wordmark from "./Wordmark";
import { BASE_PATH } from "@/lib/site-config";

/** Schlichter Rahmen für Impressum und Datenschutz. */
export default function LegalPage({
  title,
  backLabel,
  children,
}: {
  title: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center px-5 sm:px-8">
          <a href={`${BASE_PATH}/`}>
            <Wordmark />
          </a>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <a
          href={`${BASE_PATH}/`}
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {backLabel}
        </a>
        <h1 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">{title}</h1>
        <div className="mt-10 space-y-8 leading-relaxed text-ink">{children}</div>
      </main>
      <Footer />
    </>
  );
}
