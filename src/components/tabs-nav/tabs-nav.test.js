import React from 'react';
import renderer from 'react-test-renderer';
import TabsNav from './tabs-nav.jsx';

const mock = {
  tabs: [`tab 1`, `tab 2`],
  activeTab: `tab 1`,
  onClick: jest.fn(),
};

describe('TabsNav component', () => {
  it('renders correctly', () => {
    const { tabs, activeTab, onClick } = mock;

    const component = renderer
      .create(<TabsNav tabs={tabs} activeTab={activeTab} onClick={onClick} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
