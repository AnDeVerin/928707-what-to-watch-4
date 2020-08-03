import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import Player from './player.jsx';

configure({ adapter: new Adapter() });

describe('Player component', () => {
  it(`Player has state is false`, () => {
    const player = mount(
      <Player
        isPlaying={true}
        poster={`https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SY1000_CR0,0,674,1000_AL_.jpg`}
        src={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      />
    );

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};

    player.setProps({ isPlaying: false });
    expect(player.instance().props.isPlaying).toEqual(false);
  });
});
