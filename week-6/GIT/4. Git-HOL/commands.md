# Hands-on 4 — Git Stash & Tags: Commands & Output

## Stash Commands

| # | Command | Purpose |
|---|---------|---------|
| 1 | `git stash` | Stash uncommitted changes |
| 2 | `git stash list` | List all stashes |
| 3 | `git stash apply` | Apply latest stash (keep it) |
| 4 | `git stash pop` | Apply latest stash (remove it) |
| 5 | `git stash push -m "msg"` | Stash with a descriptive message |
| 6 | `git stash drop stash@{n}` | Delete a specific stash |
| 7 | `git stash clear` | Delete all stashes |

## Tag Commands

| # | Command | Purpose |
|---|---------|---------|
| 1 | `git tag v1.0.0` | Create a lightweight tag |
| 2 | `git tag -a v1.1.0 -m "msg"` | Create an annotated tag |
| 3 | `git tag` | List all tags |
| 4 | `git show v1.1.0` | Show tag details |
| 5 | `git push origin --tags` | Push all tags to remote |
| 6 | `git tag -d v1.0.0` | Delete a local tag |

See [README.md](./README.md) for the full walkthrough.
