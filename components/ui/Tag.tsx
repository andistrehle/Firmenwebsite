/** Kleines Label über Überschriften: feine Haarlinie, darunter gedämpfter Text. */
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border-t border-line pt-3 text-sm tracking-wide text-ink-faint">
      {children}
    </span>
  );
}
