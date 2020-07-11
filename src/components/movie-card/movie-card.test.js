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
        <MovieCard
          movie={movie}
          onClick={jest.fn()}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          isPlaying={false}
        />,
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
