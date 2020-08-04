import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';

import TabsContent from './tabs-content.jsx';

const mockStore = configureStore([]);

const movie = {
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
    runTime: 134,
  },
};

const review = {
  id: 1,
  user: {
    id: 4,
    name: 'Kate Muir',
  },
  rating: 8.9,
  comment:
    "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
  date: '2019-05-08T14:13:56.569Z',
};

describe('TabsContent component', () => {
  it('renders correctly on active tab Overview', () => {
    const component = renderer
      .create(<TabsContent movie={movie} activeTab={`overview`} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('renders correctly on active tab Details', () => {
    const component = renderer
      .create(<TabsContent movie={movie} activeTab={`details`} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  xit('renders correctly on active tab Reviews', () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        reviews: [review],
      },
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <TabsContent movie={movie} activeTab={`reviews`} />
        </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('renders nothing on unknown active tab', () => {
    const component = renderer
      .create(<TabsContent movie={movie} activeTab={`some unknown tab`} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
