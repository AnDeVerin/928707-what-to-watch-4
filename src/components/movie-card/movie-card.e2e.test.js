import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import MovieCard from './movie-card.jsx';

configure({ adapter: new Adapter() });

describe('MovieCard component', () => {
  it('calls passed function on card title click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <MovieCard title={`My favourite movie`} onClick={onClickMock} />
    );

    const movieCardTitle = component.find('.small-movie-card__link');
    movieCardTitle.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
