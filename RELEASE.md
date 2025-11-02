# Release Process

This document explains how to release new versions of the @joko-ui/vue package.

## Automated Release Process

We have an automated release workflow that triggers when you push a tag that starts with `v` (e.g., `v1.0.1`, `v1.2.0`).

### Steps to Release a New Version

1. Update the version in `package.json`:

   ```bash
   # Update to the new version (e.g., 1.0.1)
   npm version patch  # or minor, major
   ```

2. Push the changes and the new tag:

   ```bash
   git push origin main --follow-tags
   ```

3. The GitHub Actions workflow will:
   - Build the package
   - Publish to npm
   - Create a GitHub Release

### Prerequisites

Before you can release, make sure:

1. Your `NPM_TOKEN` is set in the GitHub repository secrets:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Click on "Secrets and variables" in the left sidebar
   - Click on "Actions"
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your npm access token (get it from https://www.npmjs.com/settings/your-username/tokens)
2. You have the necessary permissions to publish to the @joko-ui/vue package

### Manual Publishing (if needed)

If you need to publish manually:

1. Build the package:

   ```bash
   pnpm build
   ```

2. Publish to npm:
   ```bash
   npm publish --access public
   ```

## GitHub Packages Section

After setting up the repository metadata files, GitHub will automatically detect your npm package and display it in the packages section of your repository. This includes:

- Package information from package.json
- Download statistics
- Version history
- Links to npm

The following files were added to enable this:

- `.github/FUNDING.yml` - Funding information
- `.github/ISSUE_TEMPLATE/` - Issue templates for bug reports and feature requests
- `.github/workflows/release.yml` - Automated release workflow
