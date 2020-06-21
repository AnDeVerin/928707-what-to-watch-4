import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import MovieCard from './movie-card.jsx';

configure({ adapter: new Adapter() });

const movie = {
  title: 'Aviator',
  thumbUrl: 'img/aviator.jpg',
};

describe('MovieCard component', () => {
  it('calls passed function on card hover', () => {
    const onHoverMock = jest.fn();

    const component = mount(
      <MovieCard movie={movie} onHover={onHoverMock} onClick={jest.fn()} />
    );

    const movieCard = component.find('.small-movie-card');
    movieCard.simulate('mouseenter');

    expect(onHoverMock).toHaveBeenCalled();
    expect(onHoverMock).toHaveBeenCalledWith(movie);
  });

  it('calls passed function on card title click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <MovieCard movie={movie} onHover={jest.fn()} onClick={onClickMock} />
    );

    const movieCardTitle = component.find('.small-movie-card__link');
    movieCardTitle.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });

  it('calls passed function on card image click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <MovieCard movie={movie} onHover={jest.fn()} onClick={onClickMock} />
    );

    const movieCardImage = component.find('.small-movie-card__image');
    movieCardImage.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
