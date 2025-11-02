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

## Troubleshooting

### "Release already exists" Error

The release workflow now automatically checks if a release already exists before attempting to create one. If you get an error like "Validation Failed: {"resource":"Release","code":"already_exists","field":"tag_name"}", it means:

1. The tag already exists in your repository
2. A release with that tag already exists

The workflow will now:

- Check if the release exists before trying to create it
- Skip the release creation step if it already exists
- Still publish to npm regardless

If you need to recreate an existing release:

1. Check existing tags: `git tag -l`
2. Delete the existing tag and release:
   ```bash
   git tag -d v1.0.1  # Delete local tag
   git push origin :refs/tags/v1.0.1  # Delete remote tag
   ```
3. Create a new version instead:
   ```bash
   npm version patch  # This will create v1.0.2
   git push origin main --follow-tags
   ```
