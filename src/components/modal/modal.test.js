import React from 'react';
import renderer from 'react-test-renderer';
import { Modal } from './modal.jsx';

describe('Modal component', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Modal text={`Some error`} isVisible={true} onClick={jest.fn()} />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
