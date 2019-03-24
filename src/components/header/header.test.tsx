import { shallow } from 'enzyme';
import React from 'react';
import Header from './renderer';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  });
  it('Should render the image', () => {
    const img = findByTestAttr(component, 'idl-img');
    expect(img.length).toBe(1);
  });
});
