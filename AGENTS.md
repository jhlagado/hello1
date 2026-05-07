# Workflow

- Inspect before editing. Match existing patterns.
- Keep changes small, specific, and reversible.
- Preserve user work. Do not revert unrelated changes.
- Prioritize shipping prototype features quickly; add or deepen tests after core behavior works.
- Add dependencies only when requirements justify them.
- Prefer simple local state and plain functions before abstractions.
- Remove unused files, dead code, and empty folders.

# App Structure

- Keep `src/App.tsx` small until real feature structure is needed.
- Put product features under `src/features/<feature-name>`.
- Split larger features into `ui`, `hooks`, `lib`, `api`, and `tests` as useful.
- Reuse shared UI primitives before creating new components.
- Use the existing source import alias.

# UI

- Design mobile-first, then widen.
- Keep important detail reachable on narrow screens.
- Use accessible HTML before custom interaction.
- Keep styling in Tailwind classes and shared primitives.

# Code

- Keep code typed, explicit, and boring.
- Prefer small components and pure helpers.
- Avoid clever abstractions until repeated use proves value.
- Comment only when intent is not obvious.

# Tests

- Test behavior, not implementation.
- Update tests with rendering, interaction, or API-facing changes.
- Use deterministic fakes for external systems.
- Use Playwright for meaningful workflows and responsive behavior.

# Handoff

- Run the smallest relevant check while iterating.
- Before handoff, run the broadest practical verification.
- Report exactly what passed and what was not run.
