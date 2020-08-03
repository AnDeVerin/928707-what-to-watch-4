/* eslint-disable camelcase */
import React from 'react';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

import history from '../../history.js';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';
import { MoviePage } from './movie-page.jsx';

configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

const movie = {
  id: 1,
  isFavourite: false,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  thumbUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Adventure`,
  realeseYear: 2018,
  posterUrl: `https://m.media-amazon.com/images/M/MV5BYWVlMDI5N2UtZTIyMC00NjZkLWI5Y2QtODM5NGE5MzA0NmVjXkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_.jpg`,
  coverUrl: `https://m.media-amazon.com/images/M/MV5BYTRiOTM4YzEtN2MwMC00MjMxLWIxM2ItMGE1YzA1MjNkN2YzXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX1777_CR0,0,1777,999_AL_.jpg`,
  trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  overview: {
    rating: {
      value: 6.6,
      count: 240,
    },
    description: `At the end of the first film, the powerful Dark wizard Gellert Grindelwald (Depp) was captured by MACUSA (Magical Congress of the United States of America), with the help of Newt Scamander (Redmayne). But, making good on his threat, Grindelwald escaped custody and has set about gathering followers, most unsuspecting of his true agenda: to raise pure-blood wizards up to rule over all non-magical beings. In an effort to thwart Grindelwald's plans, Albus Dumbledore (Law) enlists his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,

    director: `David Yates`,
    stars: [
      `Johnny Depp`,
      `Eddie Redmayne`,
      `Kevin Guthrie`,
      `Carmen Ejogo`,
      `Wolf Roth`,
      `Eddie Redmayne`,
      `Zoë Kravitz`,
      `Callum Turner`,
      `Derek Riddell`,
      `Cornell John`,
      `Ezra Miller`,
    ],
    runTime: 111,
  },
  reviews: [
    {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `2016-12-24`,
      rating: 8.9,
    },
    {
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `2015-11-18`,
      rating: 8.0,
    },
    {
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      author: `Paula Fleri-Soler`,
      date: `2016-12-20`,
      rating: 7.6,
    },
    {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `2018-02-02`,
      rating: 9.2,
    },
    {
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `2019-12-18`,
      rating: 8.4,
    },
    {
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult. Even if the content is a little more adult`,
      author: `Paula Fleri-Soler`,
      date: `2020-12-22`,
      rating: 7.0,
    },
  ],
};

const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

describe('MoviePage component', () => {
  it(`Should call passed function on Add to my list button click`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
      [NameSpace.DATA]: {
        movies: [movie],
      },
    });

    const onToggleMock = jest.fn();

    const component = mount(
      <Provider store={store}>
        <Router history={history}>
          <MoviePage
            match={{ params: { id: 1 } }}
            location={{}}
            movies={[movie]}
            onFavouriteToggle={onToggleMock}
            getMovie={() => movie}
            authStatus={AuthorizationStatus.AUTH}
          />
        </Router>
      </Provider>
    );

    component.find('.btn--list').simulate('click');

    expect(onToggleMock).toHaveBeenCalledTimes(1);
    expect(onToggleMock).toHaveBeenCalledWith({
      id: 1,
      isFavourite: false,
    });
  });
});
