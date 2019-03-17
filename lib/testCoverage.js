'use strict';

const shell = require('shelljs');

const getOptions = require('./getOptions');

// eslint-disable-next-line no-empty-function
const testCoverage = function(configName = 'coverage.js', callback = () => {}) {
  shell.echo('');
  shell.echo('Collecting coverage...');
  shell.echo('');
  shell.exec(`jest ${getOptions(configName)}`, (codeUnitTests) => {
    if (codeUnitTests !== 0) {
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    }

    shell.echo('');
    shell.echo('Done.');
    callback();
  });
};

module.exports = testCoverage;
