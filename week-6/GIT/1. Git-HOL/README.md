# Exercise 1 — Git Basics

## Scenario / Goal
Learn the fundamental Git commands: initialising a repository, staging files,
committing changes, and inspecting history.

## Commands & Walkthrough

### 1. Initialise a new repository
```bash
mkdir my-project
cd my-project
git init
```
**Output:**
```
Initialized empty Git repository in /path/to/my-project/.git/
```

### 2. Check repository status
```bash
git status
```
**Output:**
```
On branch main
No commits yet
nothing to commit (create/copy files and use "git add" to track)
```

### 3. Create and stage files
```bash
echo "# My Project" > README.md
echo "console.log('Hello World');" > app.js
git status
```
**Output:**
```
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
        app.js
```

```bash
git add README.md        # Stage a single file
git add .                # Stage all files
```

### 4. Commit changes
```bash
git commit -m "Initial commit: add README and app.js"
```
**Output:**
```
[main (root-commit) a1b2c3d] Initial commit: add README and app.js
 2 files changed, 2 insertions(+)
 create mode 100644 README.md
 create mode 100644 app.js
```

### 5. View commit history
```bash
git log
git log --oneline
git log --oneline --graph
```
**Output (--oneline):**
```
a1b2c3d Initial commit: add README and app.js
```

### 6. View changes
```bash
# Modify a file
echo "console.log('Updated');" >> app.js

git diff              # Unstaged changes
git diff --staged     # Staged changes
```

## Key Takeaways
- `git init` creates a new repository in the current directory.
- `git add` moves files from the working directory to the staging area.
- `git commit` records a snapshot of the staging area.
- `git status` shows the current state of working directory and staging area.
- `git log` displays the commit history.
- `git diff` shows line-by-line differences.
