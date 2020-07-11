import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import MovieCard from './movie-card.jsx';

configure({ adapter: new Adapter() });

const movie = {
  title: 'Aviator',
  thumbUrl: 'img/aviator.jpg',
  trailer: 'https://example.com/video.mp4',
};

describe('MovieCard component', () => {
  it('calls passed functions on card hover', () => {
    const onMouseEnterMock = jest.fn();
    const onMouseLeaveMock = jest.fn();

    const component = mount(
      <MovieCard
        movie={movie}
        onClick={jest.fn()}
        onMouseEnter={onMouseEnterMock}
        onMouseLeave={onMouseLeaveMock}
        isPlaying={false}
      />
    );

    const movieCard = component.find('.small-movie-card');
    movieCard.simulate('mouseenter');
    movieCard.simulate('mouseleave');

    expect(onMouseEnterMock).toHaveBeenCalled();
    expect(onMouseLeaveMock).toHaveBeenCalled();
  });

  it('calls passed function on card title click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <MovieCard
        movie={movie}
        onClick={onClickMock}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        isPlaying={false}
      />
    );

    const movieCardTitle = component.find('.small-movie-card__link');
    movieCardTitle.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });

  it('calls passed function on card image click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <MovieCard
        movie={movie}
        onClick={onClickMock}
        onMouseEnter={jest.fn()}
        onMouseLeave={jest.fn()}
        isPlaying={false}
      />
    );

    const movieCardImage = component.find('.small-movie-card__image');
    movieCardImage.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
