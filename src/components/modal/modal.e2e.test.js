import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { Modal } from './modal.jsx';

configure({ adapter: new Adapter() });

describe('Modal component', () => {
  it('calls passed function on click', () => {
    const onClickMock = jest.fn();

    const component = mount(
      <Modal text={`Some error`} isVisible={true} onClick={onClickMock} />
    );

    const button = component.find('button');

    button.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
