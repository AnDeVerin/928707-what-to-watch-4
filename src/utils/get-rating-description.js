import { Scores } from '../constants.js';

const getRatingDescription = (value) => {
  if (value < 3) {
    return Scores.BAD;
  } else if (value >= 3 && value < 5) {
    return Scores.NORMAL;
  } else if (value >= 5 && value < 8) {
    return Scores.GOOD;
  } else if (value >= 8 && value < 10) {
    return Scores.VERY_GOOD;
  } else if (value === 10) {
    return Scores.AWESOME;
  }
  return Scores.UNKNOWN;
};

export default getRatingDescription;
