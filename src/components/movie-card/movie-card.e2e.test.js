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
  it('calls passed function on card title click', () => {
    const onHoverMock = jest.fn();

    const component = mount(<MovieCard movie={movie} onHover={onHoverMock} />);

    const movieCardTitle = component.find('.small-movie-card__link');
    movieCardTitle.simulate('mouseover');

    expect(onHoverMock).toHaveBeenCalled();
    expect(onHoverMock).toHaveBeenCalledWith(movie);
  });
});
