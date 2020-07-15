import { reducer, ActionType, ActionCreator } from './app.js';

const selectedMovie = {};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: 'All genres',
    selectedMovie,
  });
});

it(`Reducer should change genre to a given value`, () => {
  expect(
    reducer(
      {
        genre: 'All genres',
        selectedMovie,
      },
      {
        type: ActionType.SET_GENRE,
        payload: `Drama`,
      }
    )
  ).toEqual({
    genre: `Drama`,
    selectedMovie,
  });

  expect(
    reducer(
      {
        genre: 'All genres',
        selectedMovie,
      },
      {
        type: ActionType.SET_GENRE,
        payload: `Adventure`,
      }
    )
  ).toEqual({
    genre: `Adventure`,
    selectedMovie,
  });
});

it(`Reducer should change selectedMovie to a given value`, () => {
  expect(
    reducer(
      {
        genre: 'All genres',
        selectedMovie,
      },
      {
        type: ActionType.SET_MOVIE,
        payload: { title: `Title` },
      }
    )
  ).toEqual({
    genre: `All genres`,
    selectedMovie: { title: `Title` },
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting genre returns correct action`, () => {
    expect(ActionCreator.setGenre(`some genre`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `some genre`,
    });
  });

  it(`Action creator for setting selected movie returns correct action`, () => {
    expect(ActionCreator.setMovie({ title: `Title` })).toEqual({
      type: ActionType.SET_MOVIE,
      payload: { title: `Title` },
    });
  });
});
