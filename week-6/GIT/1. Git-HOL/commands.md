# Hands-on 1 — Git Basics: Commands & Output

## Commands demonstrated in this exercise:

| # | Command | Purpose |
|---|---------|---------|
| 1 | `git init` | Initialise a new Git repository |
| 2 | `git status` | Show the working tree status |
| 3 | `git add <file>` | Stage file(s) for the next commit |
| 4 | `git add .` | Stage all changed files |
| 5 | `git commit -m "msg"` | Record a snapshot with a message |
| 6 | `git log` | Show commit history |
| 7 | `git log --oneline` | Compact one-line commit log |
| 8 | `git diff` | Show unstaged changes |
| 9 | `git diff --staged` | Show staged changes |

## Sample session

```bash
$ mkdir demo && cd demo
$ git init
Initialized empty Git repository in /demo/.git/

$ echo "Hello" > file.txt
$ git add file.txt
$ git commit -m "first commit"
[main (root-commit) abc1234] first commit
 1 file changed, 1 insertion(+)

$ git log --oneline
abc1234 first commit

$ echo "World" >> file.txt
$ git diff
diff --git a/file.txt b/file.txt
--- a/file.txt
+++ b/file.txt
@@ -1 +1,2 @@
 Hello
+World
```

See [README.md](./README.md) for the full walkthrough.
