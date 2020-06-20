import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

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

describe('App component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<App promoMovie={PROMO_MOVIE} movies={MOVIES} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
