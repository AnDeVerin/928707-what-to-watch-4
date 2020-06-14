import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import Main from './main.jsx';

configure({ adapter: new Adapter() });

const SELECTED_MOVIE = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  realeseYear: 2014,
};

const MOVIES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

describe('Main component', () => {
  it('calls passed function on card title click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <Main
        selectedMovie={SELECTED_MOVIE}
        movies={MOVIES}
        onCardClick={onClickMock}
      />
    );

    const movieCardTitle = component.find('.small-movie-card__link').first();
    movieCardTitle.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
