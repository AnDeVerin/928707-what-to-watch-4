import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withVideo from './with-video.js';

const MockComponent = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

const movie = {
  id: 1,
  title: 'Aviator',
  thumbUrl: 'img/aviator.jpg',
  trailer: 'https://example.com/video.mp4',
};

it(`withVideo is rendered correctly`, () => {
  const component = renderer
    .create(
      <MockComponentWrapped
        match={{ params: { filmId: 1 } }}
        getMovie={() => movie}
        location={{}}
      />,
      {
        createNodeMock() {
          return {};
        },
      }
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
