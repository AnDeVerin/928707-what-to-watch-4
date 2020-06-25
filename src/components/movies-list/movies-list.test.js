import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const MOVIES = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
];

describe('MovieCard component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<MoviesList movies={MOVIES} onSelect={jest.fn()} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
