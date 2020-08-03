import React from 'react';
import PropTypes from 'prop-types';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video.js';

configure({ adapter: new Adapter() });

const movie = {
  id: 1,
  title: 'Aviator',
};

const Player = (props) => {
  const { onPlayButtonClick, children } = props;
  return (
    <div>
      <button className="play" onClick={onPlayButtonClick} />
      {children}
    </div>
  );
};

Player.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

it(`checks that HOC's callback turn on video (play)`, () => {
  const PlayerWrapped = withVideo(Player);
  const component = mount(
    <PlayerWrapped
      match={{ params: { filmId: 1 } }}
      getMovie={() => movie}
      location={{}}
    />
  );

  window.HTMLMediaElement.prototype.play = () => {};

  const { _videoRef } = component.instance();

  jest.spyOn(_videoRef.current, `play`);

  component.instance().componentDidMount();

  component.find(`button.play`).simulate(`click`);

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
});

it(`checks that HOC's callback turn off video (pause)`, () => {
  const PlayerWrapped = withVideo(Player);
  const component = mount(
    <PlayerWrapped
      match={{ params: { filmId: 1 } }}
      getMovie={() => movie}
      location={{}}
    />
  );

  component.setState({ isPlaying: true });

  window.HTMLMediaElement.prototype.pause = () => {};

  const { _videoRef } = component.instance();

  jest.spyOn(_videoRef.current, `pause`);

  component.instance().componentDidMount();

  component.find(`button.play`).simulate(`click`);

  expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
});
