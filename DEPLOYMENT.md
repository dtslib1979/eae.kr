# Deployment Guide

## Issue: GitHub Pages Deployment Failing with 404 Error

If you're seeing a deployment failure with an error like:
```
Error: Failed to create deployment (status: 404) ... Ensure GitHub Pages has been enabled
```

This means GitHub Pages has not been enabled in the repository settings.

## Solution: Enable GitHub Pages

Follow these steps to enable GitHub Pages and fix the deployment:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (gear icon in the top menu)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** from the dropdown
5. Click **Save**

### Step 2: Verify the Configuration

Once GitHub Pages is enabled:
- The workflow will automatically run on the next push to `main`
- You can also manually trigger it from the Actions tab
- The site will be available at the URL shown in the Pages settings

### Step 3: Custom Domain (Optional)

If you want to use a custom domain:
1. In the Pages settings, enter your custom domain (e.g., `www.eae.kr`)
2. Make sure the `CNAME` file in the **`public/`** folder (source directory) matches your domain
   - Vite automatically copies files from `public/` to `dist/` during build
   - The file should contain only the domain name: `www.eae.kr` (no protocol, no trailing slash)
3. Configure your DNS provider to point to GitHub Pages

## Workflow Details

The GitHub Actions workflow (`.github/workflows/pages.yml`) performs the following:

1. **Build Job**:
   - Checks out the code
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Builds the project with `npm run build`
   - Uploads the `dist` folder as an artifact

2. **Deploy Job**:
   - Downloads the artifact
   - Deploys to GitHub Pages

## Troubleshooting

### Workflow still failing after enabling Pages?

- Make sure the Source is set to **GitHub Actions** (not "Deploy from a branch")
- Check that the workflow has the correct permissions in the YAML file
- Verify the build job completed successfully before the deploy job runs

### Custom domain not working?

- Check DNS settings with your domain provider
- Wait for DNS propagation (can take up to 24 hours)
- Verify the CNAME file contains only the domain name (no protocol like `https://`)

### Build succeeds but site doesn't update?

- Clear your browser cache
- Check the service worker is updating (for PWA)
- Verify the correct branch is being deployed

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
