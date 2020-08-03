import { reducer, ActionType, ActionCreator } from './app.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    isModalVisible: false,
    errorText: `Some error`,
  });
});

it(`Reducer should change genre to a given value`, () => {
  expect(
    reducer(
      {
        genre: `All genres`,
        isModalVisible: false,
        errorText: `Some error`,
      },
      {
        type: ActionType.SET_GENRE,
        payload: `Drama`,
      }
    )
  ).toEqual({
    genre: `Drama`,
    isModalVisible: false,
    errorText: `Some error`,
  });

  expect(
    reducer(
      {
        genre: 'All genres',
      },
      {
        type: ActionType.SET_GENRE,
        payload: `Adventure`,
      }
    )
  ).toEqual({
    genre: `Adventure`,
  });
});

it(`Reducer should change errorText to a given value`, () => {
  expect(
    reducer(
      {
        genre: `All genres`,
        isModalVisible: false,
        errorText: `Some error`,
      },
      {
        type: ActionType.SET_ERROR_TEXT,
        payload: `New error text`,
      }
    )
  ).toEqual({
    genre: `All genres`,
    isModalVisible: false,
    errorText: `New error text`,
  });
});

it(`Reducer should set isModalVisible to "true"`, () => {
  expect(
    reducer(
      {
        genre: `All genres`,
        isModalVisible: false,
        errorText: `Some error`,
      },
      {
        type: ActionType.SHOW_MODAL,
        payload: null,
      }
    )
  ).toEqual({
    genre: `All genres`,
    isModalVisible: true,
    errorText: `Some error`,
  });
});

it(`Reducer should set isModalVisible to "false"`, () => {
  expect(
    reducer(
      {
        genre: `All genres`,
        isModalVisible: true,
        errorText: `Some error`,
      },
      {
        type: ActionType.HIDE_MODAL,
        payload: null,
      }
    )
  ).toEqual({
    genre: `All genres`,
    isModalVisible: false,
    errorText: `Some error`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting genre returns correct action`, () => {
    expect(ActionCreator.setGenre(`some genre`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `some genre`,
    });
  });

  it(`Action creator for setting error text returns correct action`, () => {
    expect(ActionCreator.setErrorText(`New error`)).toEqual({
      type: ActionType.SET_ERROR_TEXT,
      payload: `New error`,
    });
  });

  it(`Action creator for showing modal returns correct action`, () => {
    expect(ActionCreator.showModal()).toEqual({
      type: ActionType.SHOW_MODAL,
      payload: null,
    });
  });

  it(`Action creator for hiding modal returns correct action`, () => {
    expect(ActionCreator.hideModal()).toEqual({
      type: ActionType.HIDE_MODAL,
      payload: null,
    });
  });
});
