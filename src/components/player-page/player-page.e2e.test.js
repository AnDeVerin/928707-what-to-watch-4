import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import PlayerPage from './player-page.jsx';

configure({ adapter: new Adapter() });

describe('Player component', () => {
  it(`calls passed in functions on buttons clicks`, () => {
    const onPlayMock = jest.fn();
    const onExitMock = jest.fn();
    const onToggleMock = jest.fn();

    const player = mount(
      <PlayerPage
        isLoading={false}
        isPlaying={false}
        progress={10}
        duration={100}
        title={`Movie title`}
        onExit={onExitMock}
        onPlayButtonClick={onPlayMock}
        onToggleFullScreen={onToggleMock}
      >
        <div />
      </PlayerPage>
    );

    player.find('.player__play').simulate('click');
    expect(onPlayMock).toHaveBeenCalledTimes(1);

    player.find('.player__exit').simulate('click');
    expect(onExitMock).toHaveBeenCalledTimes(1);

    player.find('.player__full-screen').simulate('click');
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});
