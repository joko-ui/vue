# GitHub Packages Section Setup Plan

This document outlines the steps needed to add a packages section to the GitHub repository for @joko-ui/vue.

## Current Status

- Package is already published on npm
- Repository already has basic GitHub metadata
- Documentation is deployed to GitHub Pages

## Required Changes

### 1. Create GitHub Repository Metadata Files

#### `.github/FUNDING.yml` (Optional but recommended)

```yaml
# These are supported funding model platforms
github: [your-github-username]
patreon: # Replace with your Patreon username
open_collective: # Replace with your Open Collective username
ko_fi: # Replace with your Ko-fi username
tidelift: # Replace with your Tidelift platform name
community_bridge: # Replace with your Community Bridge project name
liberapay: # Replace with your Liberapay username
issuehunt: # Replace with your IssueHunt username
otechie: # Replace with your Otechie username
lfx_crowdfunding: # Replace with your LFX Crowdfunding project name
custom: # Replace with up to 4 custom sponsorship URLs
```

#### `.github/ISSUE_TEMPLATE/bug_report.md` (Optional but recommended)

```markdown
---
name: Bug report
about: Create a report to help us improve
title: ''
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**

- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
```

#### `.github/ISSUE_TEMPLATE/feature_request.md` (Optional but recommended)

```markdown
---
name: Feature request
about: Suggest an idea for this project
title: ''
labels: enhancement
assignees: ''
---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### 2. Update package.json for Better GitHub Package Discovery

The current package.json already has most of the required fields, but we should ensure:

1. The `repository` field correctly points to your GitHub repository
2. The `bugs` field points to the GitHub issues page
3. The `homepage` field points to your documentation or GitHub Pages

Current values are already correct:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/joko-ui/vue"
},
"homepage": "https://github.com/joko-ui/vue#readme",
"bugs": {
  "url": "https://github.com/joko-ui/vue/issues"
}
```

### 3. Create a Release Workflow

Create `.github/workflows/release.yml` to automate npm publishing and GitHub releases:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

permissions:
  contents: write
  id-token: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          registry-url: 'https://registry.npmjs.org'
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Publish to npm
        run: pnpm publish --no-git-checks --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Create GitHub Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

### 4. Update README.md

The README already has excellent documentation, but we should ensure it includes:

1. A clear link to the npm package
2. Installation instructions
3. Usage examples
4. Contributing guidelines

The current README already covers these points well.

### 5. Add a Package.json Script for Publishing

Ensure the `prepublishOnly` script is set up correctly (already exists):

```json
"prepublishOnly": "npm run build"
```

## Implementation Steps

1. Create the GitHub metadata files (FUNDING.yml, issue templates)
2. Create the release workflow
3. Verify package.json has all necessary fields
4. Test the release workflow with a test tag
5. Verify the packages section appears on GitHub

## Notes

- GitHub automatically detects npm packages if the repository has a valid package.json
- The packages section will appear on the GitHub repository page once the package is properly linked
- Make sure your NPM_TOKEN is set in GitHub repository secrets for publishing
- The release workflow will trigger when you push a tag that starts with 'v'
