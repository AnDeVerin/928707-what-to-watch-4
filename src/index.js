import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app.jsx';
import reducer from './reducer/reducer.js';
import { Operation } from './reducer/data/data.js';
import { createAPI } from './api.js';

const api = createAPI(() => {
  // store.dispatch(
  //   ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
  // );
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

store.dispatch(Operation.loadMovies());
store.dispatch(Operation.loadPromo());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
