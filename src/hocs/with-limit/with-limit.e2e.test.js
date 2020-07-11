import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import PropTypes from 'prop-types';

import withLimit from './with-limit.js';

configure({ adapter: new Adapter() });

const MOVIES = [
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    thumbUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    trailer: 'https://example.com/video.mp4',
  },
  {
    title: 'Bohemian Rhapsody',
    thumbUrl: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://example.com/video.mp4',
  },
];

const MockListComponent = ({ movies, onSelect }) => (
  <ul>
    {movies.map((movie, i) => (
      <li className="card" key={i} onClick={() => onSelect(movie)}>
        {movie.toString()}
      </li>
    ))}
  </ul>
);

MockListComponent.propTypes = {
  movies: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const Button = ({ onClick }) => <button onClick={onClick} />;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const MockComponentWrapped = withLimit(MockListComponent);

describe('withLimit component', () => {
  it(`shows button and 8 card on initialization`, () => {
    const component = mount(
      <MockComponentWrapped
        movies={MOVIES}
        onSelect={jest.fn()}
        button={Button}
      />
    );

    const cardsCount = component.find('.card').length;
    const button = component.find('button');

    expect(cardsCount).toEqual(8);
    expect(button.exists()).toBeTruthy();
  });

  it(`hides button if no more cards to show`, () => {
    const component = mount(
      <MockComponentWrapped
        movies={MOVIES}
        onSelect={jest.fn()}
        button={Button}
      />
    );

    let cardsCount = component.find('.card').length;
    let button = component.find('button');
    expect(cardsCount).toEqual(8);
    expect(button.exists()).toBeTruthy();

    button.simulate('click');

    cardsCount = component.find('.card').length;
    button = component.find('button');
    expect(cardsCount).toEqual(10);
    expect(button.exists()).toBeFalsy();
  });
});
