# Exercise 5 — Git Rebase & Cherry-pick

## Scenario / Goal
Learn advanced Git operations: **rebasing** to linearise history and
**cherry-picking** to apply specific commits from one branch to another.

## Commands & Walkthrough

### Part A — Git Rebase

#### 1. Rebase a feature branch onto main
```bash
git checkout feature-branch
git rebase main
```
**What happens:**
- Git "replays" the commits from `feature-branch` on top of the latest `main`.
- Results in a linear history (no merge commit).

#### 2. Interactive rebase (squash, reword, reorder)
```bash
git rebase -i HEAD~3
```
**Opens editor:**
```
pick a1b2c3d Add feature A
pick d4e5f6a Fix typo
pick g7h8i9j Cleanup

# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# s, squash = meld into previous commit
# d, drop = remove commit
```

**Example — squash the last two into the first:**
```
pick a1b2c3d Add feature A
squash d4e5f6a Fix typo
squash g7h8i9j Cleanup
```

#### 3. Resolve rebase conflicts
```bash
# If conflicts arise during rebase:
# 1. Edit the conflicted files
# 2. Stage them
git add .
# 3. Continue the rebase
git rebase --continue

# Or abort to go back to the original state
git rebase --abort
```

---

### Part B — Git Cherry-pick

#### 1. Apply a specific commit to the current branch
```bash
git log --oneline feature-branch
# Output:
# f1e2d3c Add payment module
# a4b5c6d Fix login bug
# ...

git checkout main
git cherry-pick f1e2d3c
```
**Output:**
```
[main g7h8i9j] Add payment module
 Date: ...
 1 file changed, 15 insertions(+)
```

#### 2. Cherry-pick without committing
```bash
git cherry-pick --no-commit f1e2d3c
# Changes are staged but not committed — lets you modify before committing
git commit -m "Cherry-picked payment module with adjustments"
```

#### 3. Cherry-pick a range of commits
```bash
git cherry-pick a4b5c6d..f1e2d3c    # Exclusive start
git cherry-pick a4b5c6d^..f1e2d3c   # Inclusive start
```

## Key Takeaways
- **Rebase** creates a clean, linear history but rewrites commits — never rebase shared/public branches.
- **Interactive rebase** (`-i`) lets you squash, reword, reorder, or drop commits.
- **Cherry-pick** copies individual commits between branches — great for hotfixes.
- Both can cause conflicts that must be resolved manually.
- Golden rule: *rebase local branches, merge shared branches.*
