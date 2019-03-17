'use strict';

const testReport = require('./testReport');

describe('testReport', () => {
  test('is a function.', async () => {
    expect(testReport).toBeInstanceOf(Function);
  });
});
