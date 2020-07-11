import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import { mount, configure } from 'enzyme';

import withDelay from './with-delay.js';

configure({ adapter: new Adapter() });

const movie = {
  title: 'Aviator',
  thumbUrl: 'img/aviator.jpg',
  trailer: 'https://example.com/video.mp4',
};

const MockComponent = (props) => (
  <div
    className="child"
    {...props}
    onClick={props.onClick}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  />
);

MockComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

const MockComponentWrapped = withDelay(MockComponent);

describe('withDelay component', () => {
  it(`change state on hover`, () => {
    jest.useFakeTimers();

    const component = mount(
      <MockComponentWrapped movie={movie} onClick={jest.fn()} />
    );

    expect(component.instance().state.isPlaying).toBeFalsy();

    component.find(`.child`).simulate(`mouseenter`);

    jest.runAllTimers();
    expect(component.instance().state.isPlaying).toBeTruthy();

    component.find(`.child`).simulate(`mouseleave`);

    jest.runAllTimers();
    expect(component.instance().state.isPlaying).toBeFalsy();
  });
});
