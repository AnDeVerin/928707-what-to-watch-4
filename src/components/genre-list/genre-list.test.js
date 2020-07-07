import React from 'react';
import renderer from 'react-test-renderer';
import { GenreList } from './genre-list.jsx';

const MOVIES = [
  {
    genre: `Drama`,
  },
  {
    genre: `Adventure`,
  },
];

describe('GenreList component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <GenreList
          activeGenre="All genres"
          onGenreSelect={jest.fn()}
          movies={MOVIES}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
