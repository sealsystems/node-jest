'use strict';

const testCoverage = require('./testCoverage');

describe('testCoverage', () => {
  test('is a function.', async () => {
    expect(testCoverage).toBeInstanceOf(Function);
  });
});
