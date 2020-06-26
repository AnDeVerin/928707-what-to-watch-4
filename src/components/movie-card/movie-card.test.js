import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const movie = {
  title: 'Aviator',
  thumbUrl: 'img/aviator.jpg',
  trailer: 'https://example.com/video.mp4',
};

describe('MovieCard component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <MovieCard movie={movie} onHover={jest.fn()} onClick={jest.fn()} />,
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
