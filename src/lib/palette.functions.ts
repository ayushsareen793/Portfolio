import { createServerFn } from "@tanstack/react-start";
import { preferenceSchema } from "./palettes";

export const recommendPalette = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => preferenceSchema.parse(input))
  .handler(async ({ data }) => {
    const { generatePalette } = await import("./palette.server");
    return generatePalette(data);
  });