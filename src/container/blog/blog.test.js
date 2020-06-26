import React from 'react';
import { shallow } from 'enzyme';
import Download from './index';

describe('Blog', () => {
  it('should render correctly ', () => {
    const component = shallow(<Blog />);
    expect(component).toMatchSnapshot();
  });
});