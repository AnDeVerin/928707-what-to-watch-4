import React from 'react';
import renderer from 'react-test-renderer';
import CatalogButton from './catalog-button.jsx';

describe('CatalogButton component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<CatalogButton onClick={jest.fn()} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
