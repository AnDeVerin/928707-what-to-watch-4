import React from 'react';
import renderer from 'react-test-renderer';
import LimitedMovieList from './limited-movie-list.jsx';

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

describe('LimitedMovieList component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<LimitedMovieList movies={MOVIES} onSelect={jest.fn()} />, {
        createNodeMock: () => {
          return {};
        },
      })
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
