import capitalize from './capitalize.js';

describe(`capitalize function`, () => {
  describe.each`
    v         | expected
    ${'some'} | ${'Some'}
    ${'Some'} | ${'Some'}
    ${''}     | ${''}
  `('should return', ({ v, expected }) => {
    test(`${expected} if passed ${v}`, () => {
      const score = capitalize(v);

      expect(score).toBe(expected);
    });
  });
});
