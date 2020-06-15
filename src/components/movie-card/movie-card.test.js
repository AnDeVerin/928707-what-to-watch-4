import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

describe('MovieCard component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<MovieCard title={`Some title`} onClick={jest.fn()} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
