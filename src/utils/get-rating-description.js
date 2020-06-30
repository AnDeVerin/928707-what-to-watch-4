const SCORES = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
  UNKNOWN: '-',
};

const getRatingDescription = (value) => {
  if (value < 3) {
    return SCORES.BAD;
  } else if (value >= 3 && value < 5) {
    return SCORES.NORMAL;
  } else if (value >= 5 && value < 8) {
    return SCORES.GOOD;
  } else if (value >= 8 && value < 10) {
    return SCORES.VERY_GOOD;
  } else if (value === 10) {
    return SCORES.AWESOME;
  }
  return SCORES.UNKNOWN;
};

export default getRatingDescription;
