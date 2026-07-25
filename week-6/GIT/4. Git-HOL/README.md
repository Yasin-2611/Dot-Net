# Exercise 4 — Git Stash & Tags

## Scenario / Goal
Learn how to temporarily save uncommitted work with `git stash` and how to
mark important commits with `git tag`.

## Commands & Walkthrough

### Part A — Git Stash

#### 1. Stash uncommitted changes
```bash
echo "work in progress" > wip.txt
git add wip.txt
git stash
```
**Output:**
```
Saved working directory and index state WIP on main: a1b2c3d Latest commit message
```

#### 2. List stashes
```bash
git stash list
```
**Output:**
```
stash@{0}: WIP on main: a1b2c3d Latest commit message
```

#### 3. Apply the stash
```bash
git stash apply            # Apply and keep in stash list
# or
git stash pop              # Apply and remove from stash list
```

#### 4. Stash with a message
```bash
git stash push -m "login form halfway done"
git stash list
```
**Output:**
```
stash@{0}: On main: login form halfway done
stash@{1}: WIP on main: a1b2c3d Latest commit message
```

#### 5. Drop a specific stash
```bash
git stash drop stash@{1}
git stash clear            # Remove ALL stashes
```

---

### Part B — Git Tags

#### 1. Create a lightweight tag
```bash
git tag v1.0.0
```

#### 2. Create an annotated tag
```bash
git tag -a v1.1.0 -m "Release version 1.1.0"
```

#### 3. List tags
```bash
git tag
```
**Output:**
```
v1.0.0
v1.1.0
```

#### 4. View tag details
```bash
git show v1.1.0
```

#### 5. Push tags to remote
```bash
git push origin v1.1.0       # Push a specific tag
git push origin --tags        # Push all tags
```

#### 6. Delete a tag
```bash
git tag -d v1.0.0                     # Delete locally
git push origin --delete v1.0.0      # Delete from remote
```

## Key Takeaways
- `git stash` is a lifesaver when you need to switch branches mid-work.
- Annotated tags (`-a`) store metadata (tagger, date, message) — use for releases.
- Lightweight tags are just named pointers to commits — use for bookmarks.
- Tags must be explicitly pushed to the remote with `git push --tags`.
