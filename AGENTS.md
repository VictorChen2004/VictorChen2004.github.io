# Website working rules

Read `README.md`, `CHANGELOG.md`, `WORKLOG.md`, and the global collaboration rules before making changes. `README.md` describes the current public website; `WORKLOG.md` is the internal task record.

- Preserve Victor's user-authored wording unless the request calls for a change. Verify biographical and research claims against the current source, not older website copy.
- Edit site content in `app/page.tsx`, styles in `app/globals.css`, and public assets in `public/`. The generated `.next/` and `out/` directories are not source files.
- Treat `public/` as publicly disclosed. Never copy private research data, source records, a take-home assessment package, or unreviewed personal information into it.
- The Code & Data examples under `public/code/` use synthetic inputs. Keep their limitations visible and their output distinct from empirical findings.
- Check `git status` and the deployed branch before publishing. Run the build and lint checks, inspect desktop and narrow-screen layout, and verify live publication separately from local success.
- After each material task, update the project-facing `README.md` and `CHANGELOG.md` and add a dated entry to internal `WORKLOG.md`. Keep `AGENTS.md` and `CLAUDE.md` identical when shared rules change.
- Clean only your own regenerable scratch files, moving them to macOS Trash where possible. Preserve original inputs, site assets, and other agents' work.

Current handoff: see the newest `WORKLOG.md` entry and `README.md` for the current site state and publication status.
