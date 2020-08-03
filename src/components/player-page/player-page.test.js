import React from 'react';
import renderer from 'react-test-renderer';
import PlayerPage from './player-page.jsx';

describe('PlayerPage component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <PlayerPage
          isLoading={false}
          isPlaying={false}
          progress={10}
          duration={100}
          title={`Movie title`}
          onExit={jest.fn()}
          onPlayButtonClick={jest.fn()}
          onToggleFullScreen={jest.fn()}
        >
          <div />
        </PlayerPage>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
