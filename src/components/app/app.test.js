import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const SELECTED_MOVIE = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  realeseYear: 2014,
};

const MOVIES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe('App component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<App selectedMovie={SELECTED_MOVIE} movies={MOVIES} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
