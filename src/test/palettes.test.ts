import { describe, expect, it } from "vitest";
import { validatePalette, presets, preferenceSchema, paletteVariables } from "@/lib/palettes";
describe("Dark palettes", () => {
  it("accepts the dark preset palettes", () => { for (const p of presets) expect(validatePalette(p)).toEqual(p); });
  it("rejects a light portfolio background", () => { expect(() => validatePalette({ ...presets[0], background: "#FFFFFF" })).toThrow("not dark enough"); });
  it("rejects unreadable text", () => { expect(() => validatePalette({ ...presets[0], foreground: "#151515" })).toThrow("contrast"); });
  it("rejects invalid preferred colours", () => { expect(preferenceSchema.safeParse({ colors: ["blue"], style: "Dark minimal" }).success).toBe(false); });
  it("chooses readable button text", () => { const p = presets[0]; if (!p) throw new Error("Missing preset"); expect(paletteVariables(p)["--primary-foreground"]).toBe(p.foreground); });
});