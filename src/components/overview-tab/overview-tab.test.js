import React from 'react';
import renderer from 'react-test-renderer';

import OverviewTab from './overview-tab.jsx';

const overview = {
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
};

it(`OverviewTab component renders correctly`, () => {
  const tree = renderer.create(<OverviewTab overview={overview} />).toJSON();

  expect(tree).toMatchSnapshot();
});
