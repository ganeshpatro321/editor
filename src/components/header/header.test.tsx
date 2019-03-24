import { shallow } from 'enzyme';
import React from 'react';
import Header from './renderer';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it('Should render without errors', () => {
    const wrapper = component.find(`[data-test='header']`);
    expect(wrapper.length).toBe(1);
  });
});
