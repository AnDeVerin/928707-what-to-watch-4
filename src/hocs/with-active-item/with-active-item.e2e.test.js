import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import { mount, configure } from 'enzyme';

import withActiveItem from './with-active-item.js';

configure({ adapter: new Adapter() });

const values = [`1`, `2`, `3`];

const TabsMock = (props) => {
  const { onClick, items } = props;
  return (
    <>
      {items.map((item, i) => (
        <button key={i} onClick={() => onClick(item)} />
      ))}
    </>
  );
};

TabsMock.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const MockComponentWrapped = withActiveItem(TabsMock);

describe('withActiveItem component', () => {
  it(`change state on tab click`, () => {
    const component = mount(<MockComponentWrapped items={values} />);

    expect(component.instance().state.activeItem).toBe(`1`);

    component.find(`button`).at(1).simulate(`click`);
    expect(component.instance().state.activeItem).toBe(`2`);
  });
});
