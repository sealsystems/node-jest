'use strict';

const testFn = require('./testFn');

describe('testFn', () => {
  test('is a function.', async () => {
    expect(testFn).toBeInstanceOf(Function);
  });
});
