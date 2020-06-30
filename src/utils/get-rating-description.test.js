import getRatingDescription from './get-rating-description.js';

describe(`getRatingDescription function`, () => {
  describe.each`
    v      | expected
    ${0}   | ${'Bad'}
    ${1}   | ${'Bad'}
    ${2}   | ${'Bad'}
    ${2.9} | ${'Bad'}
    ${3}   | ${'Normal'}
    ${4}   | ${'Normal'}
    ${4.9} | ${'Normal'}
    ${5}   | ${'Good'}
    ${7.9} | ${'Good'}
    ${8}   | ${'Very good'}
    ${9}   | ${'Very good'}
    ${9.9} | ${'Very good'}
    ${10}  | ${'Awesome'}
    ${'x'} | ${'-'}
  `('should return', ({ v, expected }) => {
    test(`${expected} as rating score description on value ${v}`, () => {
      const score = getRatingDescription(v);

      expect(score).toBe(expected);
    });
  });
});
