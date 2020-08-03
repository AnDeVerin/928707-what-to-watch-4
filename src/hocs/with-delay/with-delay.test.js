import React from 'react';
import renderer from 'react-test-renderer';
import withDelay from './with-delay.js';

const MockComponent = (props) => <div {...props} />;

const MockComponentWrapped = withDelay(MockComponent);

const movie = {
  id: 1,
  title: 'Aviator',
  thumbUrl: 'img/aviator.jpg',
  trailer: 'https://example.com/video.mp4',
};

it(`withDelay is rendered correctly`, () => {
  const tree = renderer
    .create(<MockComponentWrapped movie={movie} onClick={jest.fn()} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
