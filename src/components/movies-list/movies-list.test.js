import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const MOVIES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe('MovieCard component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<MoviesList movies={MOVIES} onCardClick={jest.fn()} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
