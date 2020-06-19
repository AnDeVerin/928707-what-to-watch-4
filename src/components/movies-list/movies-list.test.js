import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const MOVIES = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
  },
];

describe('MovieCard component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MoviesList movies={MOVIES} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
