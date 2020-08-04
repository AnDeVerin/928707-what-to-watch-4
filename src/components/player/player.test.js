import React from 'react';
import renderer from 'react-test-renderer';
import Player from './player.jsx';

const MOVIE = {
  thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  trailer: 'https://example.com/video.mp4',
};

describe('Player component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Player isPlaying={true} poster={MOVIE.thumbUrl} src={MOVIE.trailer} />,
        {
          createNodeMock: () => {
            return {
              play: () => {},
            };
          },
        }
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
