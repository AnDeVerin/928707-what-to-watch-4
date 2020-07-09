import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import LimitedMovieList from './limited-movie-list.jsx';

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

describe('LimitedMovieList component', () => {
  it(`shows button and 8 card on initialization`, () => {
    const component = mount(
      <LimitedMovieList onSelect={jest.fn()} movies={MOVIES} />
    );

    const cardsCount = component.find('.catalog__movies-card').length;
    const moreButton = component.find('.catalog__button');

    expect(cardsCount).toEqual(8);
    expect(moreButton.exists()).toBeTruthy();
  });

  it(`hides button if no more cards to show`, () => {
    const component = mount(
      <LimitedMovieList onSelect={jest.fn()} movies={MOVIES} />
    );

    let cardsCount = component.find('.catalog__movies-card').length;
    let moreButton = component.find('.catalog__button');
    expect(cardsCount).toEqual(8);
    expect(moreButton.exists()).toBeTruthy();

    moreButton.simulate('click');

    cardsCount = component.find('.catalog__movies-card').length;
    moreButton = component.find('.catalog__button');
    expect(cardsCount).toEqual(10);
    expect(moreButton.exists()).toBeFalsy();
  });
});
