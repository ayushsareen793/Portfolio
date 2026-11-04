import { useState, type CSSProperties } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Palette as PaletteIcon, Sparkles, RotateCcw, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { presets, paletteVariables, preferenceSchema, type Palette } from "@/lib/palettes";
import { recommendPalette } from "@/lib/palette.functions";

function Swatches({ palette }: { palette: Palette }) {
  return <span className="flex gap-1.5" aria-hidden="true">{[palette.background, palette.surface, palette.primary, palette.accent].map((c, i) => <span key={i} className="palette-swatch h-5 w-5 rounded-full border border-border" style={{ "--swatch": c } as CSSProperties} />)}</span>;
}
export function PaletteSwitcher() {
  const [selected, setSelected] = useState("Original");
  const [colors, setColors] = useState("#864451, #D0A5AD");
  const [style, setStyle] = useState("Elegant, minimal, dark, non-neon");
  const [suggestion, setSuggestion] = useState<Palette | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const generate = useServerFn(recommendPalette);
  function apply(p: Palette) { Object.entries(paletteVariables(p)).forEach(([k, v]) => document.documentElement.style.setProperty(k, v)); setSelected(p.name); }
  function reset() { const first = presets[0]; if (first) Object.keys(paletteVariables(first)).forEach((k) => document.documentElement.style.removeProperty(k)); setSelected("Original"); }
  async function suggest() {
    const input = preferenceSchema.safeParse({ colors: colors.trim().split(/[\s,]+/), style });
    if (!input.success) { setError(input.error.issues[0]?.message ?? "Check your colours and style."); return; }
    setBusy(true); setError(""); setSuggestion(null);
    try { const result = await generate({ data: input.data }); if (result.error) setError(result.error); else setSuggestion(result.palette); }
    catch { setError("The suggestion could not be completed. Your current theme is unchanged."); }
    finally { setBusy(false); }
  }
  return <Sheet><SheetTrigger asChild><Button size="icon" variant="outline" title="Colour themes" aria-label="Colour themes" className="fixed bottom-5 right-5 z-40 h-12 w-12 rounded-full bg-card shadow-lg"><PaletteIcon /></Button></SheetTrigger>
    <SheetContent className="z-[110] w-full overflow-y-auto sm:max-w-[400px]" aria-describedby="palette-description">
      <SheetHeader><SheetTitle className="font-display text-2xl">Colour studio</SheetTitle><SheetDescription id="palette-description" className="sr-only">Portfolio colour preferences</SheetDescription></SheetHeader>
      <div className="mt-8 flex items-center justify-between"><h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Dark palettes</h3><Button variant="ghost" size="icon" onClick={reset} title="Reset original theme" aria-label="Reset original theme"><RotateCcw /></Button></div>
      <div className="mt-3 space-y-2">{presets.map((p) => <Button key={p.name} variant="outline" onClick={() => apply(p)} aria-pressed={selected === p.name} className="h-14 w-full justify-between bg-card"><span className="flex items-center gap-3"><Swatches palette={p} />{p.name}</span>{selected === p.name && <Check className="text-accent" />}</Button>)}</div>
      <div className="mt-8 border-t border-border pt-6"><h3 className="flex items-center gap-2 font-display text-lg"><Sparkles className="h-4 w-4 text-accent" />AI palette</h3>
        <label htmlFor="preferred-colors" className="mt-5 mb-2 block text-sm">Preferred colours</label><Input id="preferred-colors" value={colors} onChange={(e) => setColors(e.target.value)} placeholder="#864451, #D0A5AD" maxLength={100} />
        <label htmlFor="preferred-style" className="mt-4 mb-2 block text-sm">Style</label><Textarea id="preferred-style" value={style} onChange={(e) => setStyle(e.target.value)} maxLength={300} className="min-h-20" />
        <Button onClick={suggest} disabled={busy} className="mt-4 w-full">{busy ? <Loader2 className="animate-spin" /> : <Sparkles />}{busy ? "Finding your palette…" : "Recommend palette"}</Button>
        {error && <p role="alert" className="mt-3 text-sm text-foreground">{error}</p>}
        {suggestion && <div className="mt-5 border-t border-border pt-4"><div className="flex items-center justify-between gap-3"><h4 className="font-semibold break-words">{suggestion.name}</h4><Swatches palette={suggestion} /></div><p className="mt-3 text-sm text-muted-foreground">{suggestion.reason}</p><p className="mt-3 font-mono text-xs text-muted-foreground break-words">{[suggestion.background, suggestion.surface, suggestion.primary, suggestion.accent].join(" · ")}</p><Button onClick={() => apply(suggestion)} variant="secondary" className="mt-4 w-full">{selected === suggestion.name ? <Check /> : <PaletteIcon />}Preview palette</Button></div>}
      </div>
    </SheetContent></Sheet>;
}