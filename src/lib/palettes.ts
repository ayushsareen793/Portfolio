import { z } from "zod";

export const paletteSchema = z.object({
  name: z.string(), background: z.string(), surface: z.string(), primary: z.string(), accent: z.string(), foreground: z.string(), reason: z.string(),
}).strict();
export type Palette = z.infer<typeof paletteSchema>;
export const presets: Palette[] = [
  { name: "Burgundy", background: "#0C0B0D", surface: "#191619", primary: "#864451", accent: "#D0A5AD", foreground: "#EEECEF", reason: "" },
  { name: "Ocean", background: "#0B1016", surface: "#151C23", primary: "#8AAFC8", accent: "#C3D5DF", foreground: "#EEF1F2", reason: "" },
  { name: "Coffee", background: "#100D0B", surface: "#1D1814", primary: "#B58D6B", accent: "#D9C0A8", foreground: "#F0ECE7", reason: "" },
  { name: "Graphite", background: "#121213", surface: "#1D1D20", primary: "#B2B4BC", accent: "#DDDEE2", foreground: "#F0F0F2", reason: "" },
];
const hex = /^#[0-9a-f]{6}$/i;
export function luminance(color: string) {
  const channels = [1, 3, 5].map((i) => parseInt(color.slice(i, i + 2), 16) / 255).map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return (channels[0] ?? 0) * .2126 + (channels[1] ?? 0) * .7152 + (channels[2] ?? 0) * .0722;
}
export function contrast(a: string, b: string) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
export function validatePalette(value: unknown): Palette {
  const p = paletteSchema.parse(value);
  if (![p.background, p.surface, p.primary, p.accent, p.foreground].every((c) => hex.test(c))) throw new Error("The palette contains an invalid colour.");
  if (luminance(p.background) > .04 || luminance(p.surface) > .07) throw new Error("The suggested palette was not dark enough.");
  if (contrast(p.foreground, p.background) < 4.5 || contrast(p.foreground, p.surface) < 4.5 || contrast(p.accent, p.background) < 4.5 || contrast(p.accent, p.surface) < 4.5) throw new Error("The suggested palette needs more readable contrast.");
  return p;
}
export function paletteVariables(p: Palette): Record<string, string> {
  const ink = contrast(p.primary, p.background) >= contrast(p.primary, p.foreground) ? p.background : p.foreground;
  return { "--background": p.background, "--card": p.surface, "--popover": p.surface, "--foreground": p.foreground, "--card-foreground": p.foreground, "--popover-foreground": p.foreground, "--primary": p.primary, "--primary-foreground": ink, "--secondary": `color-mix(in oklab, ${p.surface} 88%, ${p.foreground})`, "--secondary-foreground": p.foreground, "--muted": p.surface, "--muted-foreground": `color-mix(in oklab, ${p.foreground} 72%, ${p.background})`, "--accent": p.accent, "--accent-foreground": p.background, "--hot": p.foreground, "--ring": p.accent };
}
export const preferenceSchema = z.object({ colors: z.array(z.string().regex(hex, "Use six-digit hex colours.")).min(1).max(6), style: z.string().trim().min(3).max(300) });