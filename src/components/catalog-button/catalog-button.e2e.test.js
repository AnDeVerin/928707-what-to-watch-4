import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import CatalogButton from './catalog-button.jsx';

configure({ adapter: new Adapter() });

describe('CatalogButton component', () => {
  it(`calls passed function on click`, () => {
    const onClickMock = jest.fn();

    const component = mount(<CatalogButton onClick={onClickMock} />);

    const button = component.find('.catalog__button');

    button.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
