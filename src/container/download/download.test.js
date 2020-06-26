import React from 'react';
import { shallow } from 'enzyme';
import Download from './index';

describe('Download', () => {
  it('should render correctly ', () => {
    const component = shallow(<Download />);
    expect(component).toMatchSnapshot();
  });
});