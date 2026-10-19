# Marke: Stift & Server

Stand 19.10.2026. Alle Dateien in diesem Ordner gehören zusammen und sind die verbindliche Quelle für Logo, Farben und Schriften der Firmenwebsite.

## Dateien

| Datei | Wofür |
|---|---|
| `logo-mark.svg` | Bildmarke hell, für dunklen Grund. Standardfall auf dieser Website. |
| `logo-mark-dark.svg` | Bildmarke dunkel, für helle Flächen und Druck. |
| `logo-mark-mono.svg` | Einfarbig über `currentColor`, für Stempel, Fax, einfarbigen Druck. |
| `favicon.svg` | Reduzierte Fassung auf dunklem Kachelhintergrund, für Browser-Tab und App-Icon. |
| `Logo.tsx` | React-Komponente mit Bildmarke und Schriftzug. |
| `tokens.css` | Farb- und Schrift-Tokens als CSS-Variablen, mit den gemessenen Kontrastwerten. |

## Die Marke

Der Umriss ist eine Schreibfeder mit Spitze und Schlitz. Die drei Einschübe darin sind Server-Einheiten, der untere in Kupfer ist die aktive. Stift und Server stecken in einer Form, statt als zwei Symbole nebeneinanderzustehen. Die Badge-Form trägt zusätzlich eine Siegel-Anmutung, was bei Kanzleien als Zielgruppe hilft.

Die Einschübe sind echte Aussparungen über `fill-rule="evenodd"`. Die Marke funktioniert deshalb auf jedem Grund, ohne dass eine Hintergrundfarbe mitgeliefert wird.

## Regeln

**Kleine Größen.** Unter 24 Pixel verschmieren die drei Einschübe. Dort `favicon.svg` nehmen, nicht `Logo.tsx` verkleinern.

**Schutzraum.** Rundum mindestens die Höhe des Schriftzugs freilassen.

**Nicht verändern.** Marke nicht verzerren, nicht drehen, keine Schatten, keine zusätzlichen Farben. Der Akzent bleibt Kupfer, und zwar nur der untere Einschub.

**Schrift.** Überschriften und Schriftzug in Inter Tight (SemiBold bis ExtraBold, eng gesetzt, `letter-spacing: -0.035em`), Fließtext in Inter, das Akzentwort in Instrument Serif kursiv. Mehr Schnitte braucht die Seite nicht.

## Farben, gemessen

Kontrast gegen `--grund` nach WCAG 2.1, Schwelle 4,5 zu 1 für Text:

| Token | Wert | Kontrast | Verwendung |
|---|---|---|---|
| `--weiss` | #F7F0EA | 17,3 : 1 | Überschriften |
| `--text` | #CBBDB2 | 10,7 : 1 | Fließtext |
| `--neben` | #8F7F73 | 5,1 : 1 | Nebeninfos, nie unter 14 px |
| `--kupfer` | #C6713A | 5,4 : 1 | Akzent, auch als Text möglich |
| `--kupfer-hell` | #E3A067 | 8,8 : 1 | Verlaufsende, Akzentwort |
| `--glut` | #7A3A14 | 2,3 : 1 | nur als Fläche, nie als Text |
| `--linie` | #3A2A20 | 1,4 : 1 | nur Dekor, keine Feldrahmen |

Vier Dinge, die daraus folgen und die leicht falsch gemacht werden:

1. **Buttons tragen dunkle Beschriftung.** Weiße Schrift auf dem Kupferverlauf kommt auf 3,6 zu 1, am hellen Ende nur auf 2,2 und fällt damit durch. `--auf-kupfer` (#140A06) ergibt 5,4 beziehungsweise 8,8.
2. **Glut ist keine Schriftfarbe.** Als Fläche mit hellem Text darauf gut (8,6 zu 1), als Schrift oder dünne Linie auf dunklem Grund unsichtbar.
3. **Feldrahmen und Fokusringe brauchen 3 zu 1.** `--linie` erreicht 1,4 und ist nur Abschnittstrenner. Für Eingabefelder `--linie-stark` oder `--kupfer`.
4. **Nebeninfo fällt auf Karten auf 4,65 zu 1.** Dort nicht unter 14 px und kein Kleingedrucktes damit setzen, dafür `--text` nehmen.

## Rechtliches

Solange die GbR nicht gegründet ist, steht im Impressum und auf Rechnungen Andreas Strehle als Inhaber des Einzelunternehmens, Dennis da Silva arbeitet als Unterauftragnehmer. Der Markenname im Logo ersetzt das nicht.

Vor Druck und Außenauftritt gehört eine Recherche im DPMA-Register auf „Stift & Server" dazu. Die Domain stift-und-server.de war am 19.10.2026 frei, ist aber noch nicht registriert.

## Prompt für Claude Code

```
In diesem Projekt liegt unter ./brand/ die verbindliche Marke der Firma
"Stift & Server": Logo-SVGs, eine React-Komponente und die Farb- und
Schrift-Tokens.

Lies zuerst brand/README.md und brand/tokens.css vollständig und halte dich
daran. Konkret:

- Farben nur über die CSS-Variablen aus brand/tokens.css, keine neuen Hexwerte
  erfinden und keine zusätzlichen Akzentfarben einführen. Kupfer ist der
  einzige Akzent.
- Beschriftungen auf Kupferflächen in var(--auf-kupfer), niemals weiss.
- var(--glut) nur als Fläche, nie als Schrift oder dünne Linie.
- Rahmen von Eingabefeldern und Fokusringe in var(--linie-stark) oder
  var(--kupfer), nicht in var(--linie).
- var(--neben) nicht unter 14px und nicht fuer Kleingedrucktes.
- Logo ausschliesslich ueber brand/Logo.tsx einbinden, in der Kopfzeile die
  Variante "hell". Unter 24px stattdessen brand/favicon.svg. Die SVG-Pfade
  nicht nachbauen und nicht veraendern.
- Schriften: Inter Tight fuer Ueberschriften und Schriftzug, Inter fuer
  Fliesstext, Instrument Serif kursiv fuer das Akzentwort. Keine weiteren
  Familien.

Im Impressum steht Andreas Strehle als Inhaber eines Einzelunternehmens,
Weyarner Str. 55, 81547 Muenchen. Keine GmbH, keine GbR, kein
Partnerschaftszusatz, die gibt es noch nicht. Dennis da Silva darf als
Teammitglied auftreten, nicht als Gesellschafter.

Keine erfundenen Referenzen, Kundenlogos, Testimonials oder Kundenzahlen.
Fehlende Inhalte als Platzhalter kennzeichnen, zum Beispiel [REFERENZ].
```
