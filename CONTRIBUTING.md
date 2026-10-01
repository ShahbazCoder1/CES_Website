# CES Website — Contribution Guide

Repository: https://github.com/sitcesclub/CES_Website

This guide covers the standard workflow for contributing to the CES Website.

---

## 1. Fork & Clone

First, **Fork** the repository on GitHub.

Then clone **your fork**:

```bash
git clone https://github.com/YOUR_USERNAME/CES_Website.git
cd CES_Website
```

Install dependencies:

```bash
npm install
```

---

## 2. Set Up `upstream`

`origin` = **your fork**
`upstream` = **official CES repository**

Add upstream:

```bash
git remote add upstream https://github.com/sitcesclub/CES_Website.git
```

Check:

```bash
git remote -v
```

You should have:

```text
origin    → YOUR_USERNAME/CES_Website
upstream  → sitcesclub/CES_Website
```

This setup is the **same on Windows and Linux**. Git Bash / PowerShell / Terminal can all be used.

---

## 3. Before Starting Any New Task

**Always start from the latest `main`.**

```bash
git checkout main
git fetch upstream
git pull upstream main
```

Then create a new branch:

```bash
git checkout -b feature/your-feature
```

Examples:

```text
feature/gallery
feature/events-section
fix/mobile-navbar
content/about-section
```

**Never develop directly on `main`.**

---

## 4. Code & Test

Start the website:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Before committing:

```bash
npm run lint
npm run build
```

Also manually test the changes, especially on **mobile and desktop** if you changed UI.

---

## 5. Commit

Check your changes:

```bash
git status
git diff
```

Then:

```bash
git add .
git commit -m "Add gallery section"
```

Keep commits clear and relevant.

✅ `Fix mobile navbar`
✅ `Add events section`
❌ `update`
❌ `changes`
❌ `final final`

---

## 6. Push Your Branch

```bash
git push -u origin feature/your-feature
```

After the first push:

```bash
git push
```

---

## 7. Create the Pull Request

Go to your fork on GitHub and click **Compare & pull request**.

Make sure:

```text
base repository:    sitcesclub/CES_Website
base branch:       main

head repository:   YOUR_USERNAME/CES_Website
compare branch:    feature/your-feature
```

Your PR should contain:

* **What you changed**
* **Why you changed it**
* **How you tested it**

---

## 8. Visual Work = Screenshots / Screen Recording

If your PR changes anything visual/UI:

### Always attach proof.

**Screenshots are required**, and **screen recordings are preferred** when they demonstrate interaction or animation.

Examples:

* New section → screenshot
* Responsive/mobile changes → desktop + mobile screenshots
* Animation → screen recording
* Carousel/slider → screen recording
* Hover effects → screen recording
* Interactive components → screen recording
* Bug fix → before/after screenshots or recording

A good PR should let the reviewer **see the result without having to run the project first**.

> **If it's a visual change, show the visual change.**

---

## 9. If Changes Are Requested

Don't create another PR.

Simply make the changes on the **same branch**:

```bash
git add .
git commit -m "Address review feedback"
git push
```

The existing PR will automatically update.

---

#  Quick Workflow

After your initial setup, this is what you'll use most of the time:

```bash
# Get latest code
git checkout main
git fetch upstream
git pull upstream main

# New branch
git checkout -b feature/my-feature

# Code + test
npm run dev
npm run lint
npm run build

# Commit
git add .
git commit -m "Describe the change"

# Push
git push -u origin feature/my-feature
```

Then open a **Pull Request → CES `main`**.

### Remember

```text
upstream → CES official repository
origin   → your fork

main     → keep clean
branch   → do your work
PR       → submit your work
```

**Keep PRs focused, test your changes, and always show visual work.**
