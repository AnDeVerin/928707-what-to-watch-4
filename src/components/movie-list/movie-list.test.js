import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

const MOVIES = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
];

describe('MovieCard component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<MovieList movies={MOVIES} onSelect={jest.fn()} />, {
        createNodeMock: () => {
          return {};
        },
      })
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
