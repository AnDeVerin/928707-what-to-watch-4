import formatDate from './format-date.js';

describe(`formatDate function`, () => {
  describe.each`
    v               | expected
    ${'2016-02-01'} | ${'February 1, 2016'}
    ${'2020-12-12'} | ${'December 12, 2020'}
    ${'1980/5/19'}  | ${'May 19, 1980'}
  `('should return formated date', ({ v, expected }) => {
    test(`${expected} if passed ${v}`, () => {
      const res = formatDate(v);

      expect(res).toBe(expected);
    });
  });
});
