/* eslint-disable camelcase */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';
import { App } from './app.jsx';

const mockStore = configureStore([]);

const PROMO_MOVIE = {
  id: 1,
  coverUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
  genre: `Crime`,
  posterUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
  realeseYear: 1984,
  thumbUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
  title: `Once Upon a Time in America`,
  isFavourite: false,
};

const MOVIES = [
  {
    id: 1,
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
      description: [
        `At the end of the first film, the powerful Dark wizard Gellert Grindelwald (Depp) was captured by MACUSA (Magical Congress of the United States of America), with the help of Newt Scamander (Redmayne). But, making good on his threat, Grindelwald escaped custody and has set about gathering followers, most unsuspecting of his true agenda: to raise pure-blood wizards up to rule over all non-magical beings. In an effort to thwart Grindelwald's plans, Albus Dumbledore (Law) enlists his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
      ],
      director: `David Yates`,
      stars: `Johnny Depp, Eddie Redmayne, Kevin Guthrie, Carmen Ejogo`,
    },
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    thumbUrl: `img/bohemian-rhapsody.jpg`,
    genre: `Drama`,
    realeseYear: 2018,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SY1000_CR0,0,674,1000_AL_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BMTYwYzMwMGItZDkzOS00YTczLTg2MDAtNDA2MWY2YmU5NDZiXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    overview: {
      rating: {
        value: 8.5,
        count: 426,
      },
      description: [
        `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Музыкальный фестиваль Live Aid (1985).`,
      ],
      director: `Bryan Singer`,
      stars: `Rami Malek, Lucy Boynton, Gwilym Lee`,
    },
  },
];

const user = {
  avatar_url: '/wtw/static/avatar/5.jpg',
  email: 'user@mail.com',
  id: 1,
  name: 'user',
};

describe('App component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: MOVIES,
        promo: PROMO_MOVIE,
      },
      [NameSpace.APP]: {
        genre: `All genres`,
        isModalVisible: false,
        errorText: `Some error`,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user,
      },
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <App
            selectedMovie={{}}
            authStatus={AuthorizationStatus.AUTH}
            login={jest.fn()}
            getMovie={jest.fn()}
            postReview={jest.fn()}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
