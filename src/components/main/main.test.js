import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const PROMO_MOVIE = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  realeseYear: 2014,
};

const MOVIES = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
  },
];

describe('Main component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Main
          promoMovie={PROMO_MOVIE}
          movies={MOVIES}
          onMovieSelect={jest.fn()}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
