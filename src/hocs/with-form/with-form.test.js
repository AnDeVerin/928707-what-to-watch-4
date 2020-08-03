import React from 'react';
import renderer from 'react-test-renderer';

import withForm from './with-form.js';

const MockComponent = (props) => <div {...props} />;

const MockComponentWrapped = withForm(MockComponent);

it(`withForm is rendered correctly`, () => {
  const component = renderer
    .create(
      <MockComponentWrapped
        match={{ params: { id: 1 } }}
        location={{}}
        getMovie={jest.fn()}
        onSubmit={jest.fn()}
      />
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
