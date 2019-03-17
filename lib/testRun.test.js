'use strict';

const testRun = require('./testRun');

describe('testRun', () => {
  test('is a function.', async () => {
    expect(testRun).toBeInstanceOf(Function);
  });
});
