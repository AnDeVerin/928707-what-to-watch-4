import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import { ReviewsTab } from './reviews-tab.jsx';

const reviews = [
  {
    id: 1,
    user: {
      id: 4,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment:
      "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
    date: '2019-05-08T14:13:56.569Z',
  },
];

configure({ adapter: new Adapter() });

describe('ReviewsTab component', () => {
  it(`calls passed in function on mount and props update`, () => {
    const loadReviewsMock = jest.fn();

    const component = mount(
      <ReviewsTab filmId={10} loadReviews={loadReviewsMock} reviews={reviews} />
    );

    component.setProps({ filmId: 20 });

    expect(loadReviewsMock).toHaveBeenCalledTimes(2);
    expect(loadReviewsMock).toHaveBeenNthCalledWith(1, 10);
    expect(loadReviewsMock).toHaveBeenNthCalledWith(2, 20);
  });
});
