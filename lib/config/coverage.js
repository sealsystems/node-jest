'use strict';

const base = require('./base');

const coverage = Object.assign({}, base, {
  collectCoverage: true,
  collectCoverageFrom: ['lib/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text']
});

module.exports = coverage;
