# @sealsystems/test-config-mocha

Jest executable and test configuration for SEAL Systems

## Installation

```bash
npm install --save-dev @sealsystems/jest
```

## Quick start

Jest is installed as a dependency of `@sealsystems/test-config-mocha`. So you can call `jest` from the root directory of your project:

```shell
$(npm bin)/jest
```

Please note:

- In order to install all dependencies directly in the project's `node_modules` folder, you may need to delete `package-lock.json` before adding this package.

The package also provides some CLI executables:

- `test-run` runs Jest

- `test-coverage` collects coverage data

- `test-coverage-check` collects coverage data and fails if threshold (80% for all criteria) has not been reached

- `test-report` collect coverage data and opens the generated HTML page

To use these executables, add some scripts to your `package.json`:

```json
...
"scripts": {
  "test": "test-run",
  "test:coverage": "test-coverage",
  "test:coverage:check": "test-coverage-check",
  "test:report": "test-report"
}
...
```

And call them via `npm run`:

```shell
npm run test
npm run test:coverage
npm run test:coverage:check
npm run test:report
```
