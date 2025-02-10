# Getting Started

## Prerequisites

- Both `node.js` and `npm` should be installed globally. You can find the instructions <https://nodejs.org/en/download/package-manager>
- Make sure to use the LTS (Long-Term Support) version of Node.js for better stability and compatibility

## Installation

- run `npm ci` on the root of the project

## Development process

- run `npm run dev` on the root of the project and this will start dev server.
- open <http://localhost:3000> in any available browser (Opera, Chrome, Firefox, Safari).
- Make change and save file. All changes will be reflected in browser immediately.

### IDE Setup for Consistent Code Formatting

1. **Install `.editorconfig` plugin**: Ensure your editor has the [EditorConfig plugin](https://editorconfig.org/) installed to follow consistent formatting rules.
2. **For VSCode users**:
   - Ensure the `.vscode/settings.json` file is present for auto-format on save, 2-space indentation, and ESLint integration.
   - Install the recommended extensions by opening VSCode and accepting the suggestions from the `.vscode/extensions.json` file. This includes:
     - Prettier
     - ESLint
     - EditorConfig
     - MDX support (if applicable)

### Development Flow

1. **Take an issue from GitHub:**

   - Browse the [issues](https://github.com/boarlabsxyz/boarlabs/issues) and select one to work on.
   - Assign the issue to yourself to avoid duplication of work.

2. **Create a new branch:**

   ```sh
   git checkout -b <issue-number>-<short-description>
   ```

3. **Implement the changes:**

   - Implement issue.
   - Keep PR as small as possible.
   - Create several PRs if issue requires significant changes.
   - Ensure your code adheres to the project's coding standards and guidelines.

4. **Create a Pull Request (PR):**

   - Push your branch to the remote repository:

     ```sh
     git push origin <issue-number>-<short-description>
     ```

   - Open a PR against the `main` branch.
   - Provide a clear and concise description of the changes made.

5. **Pass Continuous Integration (CI):**

    - Ensure that all CI checks pass successfully.
    - Fix any issues reported by the CI pipeline.
    ```sh
    docker compose run app npm run lint
    ```
    - Fix any linting issues reported.

6. **Get approval and merge the code:**

   - Request a review from the project maintainers.
   - Address any feedback or requested changes.
   - Once approved, merge the PR into the `main` branch.


## Changelog

We use Semantic Versioning (SemVer) and track all changes in the [`CHANGELOG.md`](/CHANGELOG.md) file. Please refer to it for details about updates, new features, bug fixes, and other modifications.


## Semantic Versioning (SemVer)
Format: MAJOR.MINOR.PATCH

- MAJOR: incremented for significant changes that are not backward compatible.
- MINOR: incremented when new functionality is added that is backward compatible.
- PATCH: incremented for bug fixes or minor changes.

Example: 1.2.3 — the third patch of the second minor update of the first major version.

The SemVer is updated in the `version` field of the `package.json` file.
