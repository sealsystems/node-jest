'use strict';

// PLEASE NOTE: File must be renamed from `test.js` to distinguish it from Jest tests

const shell = require('shelljs');

const getOptions = require('./getOptions');

// eslint-disable-next-line no-empty-function
const test = function(callback = () => {}) {
  shell.echo('');
  shell.echo('Running unit tests...');
  shell.echo('');
  shell.exec(`jest ${getOptions('base.js')}`, (codeUnitTests) => {
    if (codeUnitTests !== 0) {
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    }

    shell.echo('');
    shell.echo('Done.');
    callback();
  });
};

module.exports = test;
