import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import { GenreList } from './genre-list.jsx';

configure({ adapter: new Adapter() });

const MOVIES = [
  {
    genre: `Drama`,
  },
  {
    genre: `Adventure`,
  },
];

describe('GenreList component', () => {
  it('renders three items with correct active class', () => {
    const component = mount(
      <GenreList
        activeGenre="All genres"
        movies={MOVIES}
        onGenreSelect={jest.fn()}
      />
    );

    const items = component.find('.catalog__genres-item');

    expect(items.length).toBe(3);
    expect(items.at(0).hasClass(`catalog__genres-item--active`)).toBeTruthy();
    expect(items.at(1).hasClass(`catalog__genres-item--active`)).toBeFalsy();
    expect(items.at(2).hasClass(`catalog__genres-item--active`)).toBeFalsy();
  });

  it('updates active class on props change', () => {
    const component = mount(
      <GenreList
        activeGenre="All genres"
        movies={MOVIES}
        onGenreSelect={jest.fn()}
      />
    );

    let items = component.find('.catalog__genres-item');
    expect(items.at(0).hasClass(`catalog__genres-item--active`)).toBeTruthy();
    expect(items.at(1).hasClass(`catalog__genres-item--active`)).toBeFalsy();

    component.setProps({
      activeGenre: `Drama`,
    });

    items = component.find('.catalog__genres-item');
    expect(items.at(0).hasClass(`catalog__genres-item--active`)).toBeFalsy();
    expect(items.at(1).hasClass(`catalog__genres-item--active`)).toBeTruthy();
  });

  it('calls passed function with correct genre on click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <GenreList
        activeGenre="All genres"
        movies={MOVIES}
        onGenreSelect={onClickMock}
      />
    );

    const links = component.find(`.catalog__genres-link`);
    links.at(1).simulate(`click`);

    expect(onClickMock).toHaveBeenCalled();
    expect(onClickMock).toHaveBeenCalledWith(`Drama`);
  });
});
