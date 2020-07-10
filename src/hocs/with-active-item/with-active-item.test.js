import React from 'react';
import renderer from 'react-test-renderer';
import withActiveItem from './with-active-item.js';

const MockComponent = (props) => <div {...props} />;

const MockComponentWrapped = withActiveItem(MockComponent);

it(`withActiveItem is rendered correctly`, () => {
  const tree = renderer
    .create(<MockComponentWrapped movie={{}} items={[]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
