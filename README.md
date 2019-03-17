# @sealsystems/test-config-mocha

Test configuration for Jest at SEAL Systems

## Installation

```bash
npm install --save-dev @sealsystems/test-config-jest
```

## Quick start

Jest is installed as a dependency of `@sealsystems/test-config-mocha`. So you can call `jest` from the root directory of your project:

```shell
$(npm bin)/jest
```

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
