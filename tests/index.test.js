import React from 'react';
import { shallow } from 'enzyme';

import Home from '../pages/index';

describe('first Sample Test', () => {
  it('Home shows "Hello, World!"', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1').text()).toEqual('Hello, World!');
  });
});
