import React from 'react';
import renderer from 'react-test-renderer';

import DetailsTab from './details-tab.jsx';

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
    runTime: 111,
  },
};

it(`DetailsTab component renders correctly`, () => {
  const tree = renderer.create(<DetailsTab movie={movie} />).toJSON();

  expect(tree).toMatchSnapshot();
});
