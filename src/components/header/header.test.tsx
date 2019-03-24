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
  describe('Have props', () => {
    let component;
    beforeEach(() => {
      const props = {
        editorString: {},
        lastPosition: 0,
        manualParse: false,
        mode: 'vega-lite',

        showExample: false,
        // exportVega: jest.fn(),
        // formatSpec: jest.fn(),
        // location: { pathname: '/', search: '', hash: '', state: undefined },

        // match: undefined,
        // parseSpec: jest.fn(),

        vegaLiteSpec: null,
        vegaSpec: {},
        view: null,
        // history: { length: 0 },
        // setScrollPosition: jest.fn(),
        // staticContext: undefined,
        // toggleAutoParse: jest.fn(),
      };
      component = setup(props);
    });
    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    });
  });
  describe('Have No Props', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it('Should not render', () => {
      const wrapper = findByTestAttr(component, 'header');
      expect(wrapper.length).toBe(0);
    });
  });
});
