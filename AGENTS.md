<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep palette validation and presets in a browser-safe module; apply visitor previews through semantic CSS variables so all portfolio surfaces update together.
- The portfolio uses the global semantic colour tokens as its fixed theme; do not mount the optional palette preview interface.
- Present portfolio content as editorial spreads and ruled ledgers with real project screenshots; keep the existing single-page section anchors and reusable design-system controls so navigation and theme behavior remain consistent.
- AI palette recommendations use a public, validated TanStack server function with request-local Lovable AI Gateway Responses helpers; keep keys and prompts server-only.
- Set the external Nitro target to Vercel while retaining the Lovable configuration wrapper so hosted previews keep their managed target.
