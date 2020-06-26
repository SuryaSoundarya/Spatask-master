import React from 'react';
import { shallow } from 'enzyme';
import Features from './index';

describe('Features', () => {
  it('should render correctly ', () => {
    const component = shallow(<Features />);
    expect(component).toMatchSnapshot();
  });
});