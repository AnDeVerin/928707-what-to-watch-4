import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '../../reducer/user/user.js';
import NameSpace from '../../reducer/name-space.js';
import Promo from './promo.jsx';

const mockStore = configureStore([]);

const promoMovie = {
  coverUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
  genre: `Crime`,
  posterUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
  realeseYear: 1984,
  thumbUrl: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
  title: `Once Upon a Time in America`,
};

describe('Promo component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    const component = renderer
      .create(
        <Provider store={store}>
          <Promo promoMovie={promoMovie} />
        </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});