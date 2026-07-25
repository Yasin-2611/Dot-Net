# Hands-on 5 — Git Rebase & Cherry-pick: Commands & Output

## Rebase Commands

| # | Command | Purpose |
|---|---------|---------|
| 1 | `git rebase main` | Rebase current branch onto main |
| 2 | `git rebase -i HEAD~3` | Interactive rebase (squash, reword, reorder) |
| 3 | `git rebase --continue` | Continue after resolving conflicts |
| 4 | `git rebase --abort` | Abort and revert to original state |

## Cherry-pick Commands

| # | Command | Purpose |
|---|---------|---------|
| 1 | `git cherry-pick <hash>` | Apply a specific commit |
| 2 | `git cherry-pick --no-commit <hash>` | Apply without auto-committing |
| 3 | `git cherry-pick A^..B` | Cherry-pick a range (inclusive) |

See [README.md](./README.md) for the full walkthrough.
