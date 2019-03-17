'use strict';

const { defaults } = require('jest-config');

const base = Object.assign({}, defaults, {
  rootDir: process.cwd(),
  verbose: true,
  bail: true
});

module.exports = base;
