# Exercise 3 — Remote Repositories

## Scenario / Goal
Learn how to work with remote Git repositories: cloning, pushing, pulling,
and managing remote connections.

## Commands & Walkthrough

### 1. Clone a remote repository
```bash
git clone https://github.com/username/repo.git
cd repo
```

### 2. View remote connections
```bash
git remote -v
```
**Output:**
```
origin  https://github.com/username/repo.git (fetch)
origin  https://github.com/username/repo.git (push)
```

### 3. Add a remote
```bash
git remote add upstream https://github.com/original/repo.git
git remote -v
```

### 4. Push changes to remote
```bash
echo "new feature" > feature.txt
git add .
git commit -m "Add new feature"
git push origin main
```
**Output:**
```
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Writing objects: 100% (3/3), 294 bytes | 294.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To https://github.com/username/repo.git
   a1b2c3d..e5f6g7h  main -> main
```

### 5. Pull changes from remote
```bash
git pull origin main
```
**Output:**
```
Already up to date.
```

### 6. Fetch without merging
```bash
git fetch origin
git log origin/main --oneline
```

### 7. Push a new branch
```bash
git checkout -b feature-x
# ... make changes and commit ...
git push -u origin feature-x
```

## Key Takeaways
- `git clone` downloads a repository and sets up `origin` automatically.
- `git push` sends local commits to the remote.
- `git pull` fetches and merges remote changes (= `git fetch` + `git merge`).
- `git fetch` downloads remote data without merging — useful for reviewing first.
- `-u` (or `--set-upstream`) links a local branch to a remote tracking branch.
