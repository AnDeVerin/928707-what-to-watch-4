import React from 'react';
import renderer from 'react-test-renderer';
import ReviewCard from './review-card.jsx';

const review = {
  text: `Bla-bla-bla. This is some review test`,
  author: `Doctor Who`,
  date: `2020-06-28`,
  rating: 7.7,
};

describe('ReviewCard component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ReviewCard review={review} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
