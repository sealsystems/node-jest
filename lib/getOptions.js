'use strict';

const path = require('path');

const getOptions = function(configName) {
  return ['--colors', `--config=${path.join(__dirname, 'config', configName)}`].join(' ');
};

module.exports = getOptions;
