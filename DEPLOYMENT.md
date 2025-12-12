# Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub account
- Cloudflare account (free tier works)
- Git repository with your code

## Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create Application** → **Pages**
3. Click **Connect to Git**
4. Select your GitHub repository
5. Configure build settings:
   - **Project name**: `pixel-palette-portfolio` (or your choice)
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
   - **Environment variables**: None needed

## Step 3: Deploy

Click **Save and Deploy**. Cloudflare will:
- Install dependencies
- Run the build
- Deploy to their global CDN
- Provide you with a URL like: `https://pixel-palette-portfolio.pages.dev`

## Step 4: Custom Domain (Optional)

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Add your domain
4. Follow DNS configuration instructions

## Build Settings Summary
```
Framework preset: None (Vite)
Build command: npm run build
Build output directory: dist
Node version: 18
```

## Automatic Deployments
Every push to `main` branch will trigger a new deployment automatically.

## Preview Deployments
Every pull request gets its own preview URL for testing.

## Troubleshooting

### Build fails
- Check Node version is 18 or higher
- Ensure all dependencies are in package.json
- Verify build works locally: `npm run build`

### 404 on routes
- The `_redirects` file handles SPA routing
- Ensure it's in the `public` folder

### Environment variables
- Add in Cloudflare Pages settings if needed
- Go to Settings → Environment variables

## Performance
Your site will be served from Cloudflare's global CDN with:
- Automatic HTTPS
- DDoS protection
- Fast global delivery
- Unlimited bandwidth (free tier)
