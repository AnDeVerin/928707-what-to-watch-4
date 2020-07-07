import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app/app.jsx';
import { reducer } from './reducer.js';
import { PROMO_MOVIE } from './mocks/films.js';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

ReactDOM.render(
  <Provider store={store}>
    <App promoMovie={PROMO_MOVIE} />
  </Provider>,
  document.querySelector(`#root`)
);
