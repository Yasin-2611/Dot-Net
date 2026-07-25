# Exercise 2 — Branching & Merging

## Scenario / Goal
Learn how to create, switch between, and merge Git branches. Understand
fast-forward vs. three-way merges and how to resolve merge conflicts.

## Commands & Walkthrough

### 1. Create and switch to a new branch
```bash
git branch feature-login       # Create branch
git checkout feature-login     # Switch to it
# Or in one command:
git checkout -b feature-login
```

### 2. List branches
```bash
git branch
```
**Output:**
```
* feature-login
  main
```

### 3. Make changes on the feature branch
```bash
echo "function login() { }" > login.js
git add login.js
git commit -m "Add login function"
```

### 4. Switch back to main and merge
```bash
git checkout main
git merge feature-login
```
**Output (fast-forward):**
```
Updating a1b2c3d..d4e5f6a
Fast-forward
 login.js | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 login.js
```

### 5. Delete the merged branch
```bash
git branch -d feature-login
```

### 6. Simulating a merge conflict
```bash
# On main
echo "line 1" > shared.txt
git add . && git commit -m "add shared.txt"

git checkout -b branch-a
echo "branch A change" > shared.txt
git add . && git commit -m "branch-a edit"

git checkout main
echo "main change" > shared.txt
git add . && git commit -m "main edit"

git merge branch-a
```
**Output:**
```
Auto-merging shared.txt
CONFLICT (content): Merge conflict in shared.txt
Automatic merge failed; fix conflicts and then commit the result.
```

### 7. Resolve the conflict
```bash
# Edit shared.txt — remove <<<<<<< / ======= / >>>>>>> markers
git add shared.txt
git commit -m "Resolve merge conflict in shared.txt"
```

## Key Takeaways
- Branches are lightweight pointers to commits.
- `git merge` combines branch histories; fast-forward when possible.
- Merge conflicts occur when the same lines are changed in both branches.
- Always delete merged feature branches to keep the repo clean.
