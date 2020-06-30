import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import TabsNav from './tabs-nav.jsx';

configure({ adapter: new Adapter() });

const mock = {
  tabs: [`tab 1`, `tab 2`],
  activeTab: `tab 1`,
  onClick: jest.fn(),
};

describe('TabsNav component', () => {
  it('calls passed function on click with correct value', () => {
    const { tabs, activeTab, onClick } = mock;

    const component = mount(
      <TabsNav tabs={tabs} activeTab={activeTab} onClick={onClick} />
    );

    const tabLinks = component.find('.movie-nav__link');
    tabLinks.at(1).simulate('click');

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(`tab 2`);
  });

  it('changes active class on props update', () => {
    const { tabs, activeTab, onClick } = mock;

    const component = mount(
      <TabsNav tabs={tabs} activeTab={activeTab} onClick={onClick} />
    );

    const tabItems = component.find('.movie-nav__item');

    expect(tabItems.at(0).hasClass('movie-nav__item--active')).toBeTruthy();

    component.setProps({
      tabs,
      activeTab: `tab 2`,
      onClick,
    });

    expect(
      component
        .find('.movie-nav__item')
        .at(0)
        .hasClass('movie-nav__item--active')
    ).toBeFalsy();

    expect(
      component
        .find('.movie-nav__item')
        .at(1)
        .hasClass('movie-nav__item--active')
    ).toBeTruthy();
  });
});
