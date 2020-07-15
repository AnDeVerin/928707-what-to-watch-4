import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

describe('Header component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Header />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
