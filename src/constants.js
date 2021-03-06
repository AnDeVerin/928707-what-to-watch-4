export const MOVIE_LIST_COUNT = 8; // numbers of videos to show in movie list
export const DELAY = 1000; // delay before playing video in video card
export const HOST = `https://4.react.pages.academy`;

export const Scores = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
  UNKNOWN: '-',
};

export const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  MYLIST: `/my-list`,
  PLAYER: '/player/:filmId?',
  FILM: `/films/:id`,
  REVIEW: `/films/:id/review`,
};

export const TabName = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`,
};
