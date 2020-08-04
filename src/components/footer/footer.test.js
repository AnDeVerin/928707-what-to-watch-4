import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import history from '../../history.js';

import Footer from './footer.jsx';

describe('Footer component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Router history={history}>
          <Footer />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
