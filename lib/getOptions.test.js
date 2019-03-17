'use strict';

const getOptions = require('./getOptions');

describe('getOptions', () => {
  test('is a function.', async () => {
    expect(getOptions).toBeInstanceOf(Function);
  });
});
