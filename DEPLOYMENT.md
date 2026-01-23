# Deployment Guide

This project is configured for deployment to GitHub Pages.

## Prerequisites

1.  Ensure you have a GitHub repository set up.
2.  The `base` path in `vite.config.ts` must match your repository name (currently set to `/portfolio-website/`).

## Deployment Steps

### 1. Install Dependencies
If you haven't already:
```bash
npm install
```

### 2. Build and Deploy
Run the following command to build the project and push the `dist` folder to the `gh-pages` branch:
```bash
npm run deploy
```

### 3. GitHub Settings
1.  Go to your repository on GitHub.
2.  Navigate to **Settings** > **Pages**.
3.  Under **Build and deployment** > **Branch**, ensure it is set to `gh-pages` and folder `/ (root)`.

## Manual Build (Optional)
To just build the project without deploying:
```bash
npm run build
```
The production-ready files will be in the `/dist` directory.
