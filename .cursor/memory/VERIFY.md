# Verify manifest: Blessed the Movie

Agent: run via hub verify skill; on Windows use npm scripts directly.

Tiers: **light** (1–2 files) | **standard** (features) | **full** (pre-push / session end)

## Commands

| Name | Command | Tiers |
|------|---------|-------|
| lint | `npm run lint` | standard, full |
| build | `npm run build` | full |

## Smoke (warn only — failure does not block)

| Name | Command | Tiers |
|------|---------|-------|
| typecheck | `npx tsc --noEmit` | light, standard, full |

## Done criteria (observable)

- [ ] Diff matches stated goal; no drive-by refactors
- [ ] No secrets in diff
- [ ] Lint/typecheck pass (standard+)
- [ ] Build passes (full)
- [ ] Hero shows bridge (or bikes) image; Learn More gone; trailer CTA present
- [ ] About / Cast / Audience Praise / Press assets match stakeholder copy
- [ ] Experience It section absent
- [ ] Crew bios for Jane + Jared present

## Notes

- Visual QA: load `/` and scroll all sections on desktop + mobile width
