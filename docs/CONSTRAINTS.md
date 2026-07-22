# Constraints for AI agents

These rules are mandatory for every agent working in this repository.

## Scope

- Change **only** what is necessary for the requested task.
- No drive-by refactors, unrelated file edits, or “while we’re here” improvements unless the user explicitly asks.
- Prefer minimal diffs. Match existing patterns, naming, and structure.
- Do not add dependencies, docs, or features that were not requested.

## Repository boundary

- Stay inside this repository’s workspace root.
- **Never** read, write, delete, or run commands that affect paths **outside this repository** unless the user explicitly directs it **and** you re-state the exact path and receive confirmation before acting.
- Do not modify sibling repos, home-directory config, global tooling, or system settings unless explicitly confirmed as above.

## Secrets and personal data

- Keep secrets in `.env` (gitignored). Use `.env.example` for placeholders only.
- Do not put the personal inquire inbox address in the public UI, meta tags, or schema.
- Do not commit `.env` or real Formspree credentials.

## Blueprint

- When plans are discussed or code changes land, update [`docs/BLUEPRINT.md`](BLUEPRINT.md) in the same session.
