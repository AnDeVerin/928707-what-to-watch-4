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

    const component = mount(<MovieCard movie={movie} onHover={onHoverMock} />);

    const movieCard = component.find('.small-movie-card');
    movieCard.simulate('mouseenter');

    expect(onHoverMock).toHaveBeenCalled();
    expect(onHoverMock).toHaveBeenCalledWith(movie);
  });
});
