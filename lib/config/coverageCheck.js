'use strict';

const coverage = require('./coverage');

const coverageCheck = Object.assign({}, coverage, {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
});

module.exports = coverageCheck;
