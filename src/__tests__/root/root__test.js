
import React from 'react';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import {mount ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Root from '../../root';

Enzyme.configure({ adapter: new Adapter() });

describe('some basics', () => {
  it('shall matches snapshot', () => {
    const tree = renderer.create(
      <Root/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shall have input',() => {
    const tree = mount(
      <Root/>
    );
    expect(tree.find('input')).toHaveLength(1);
  });

  it('shall have hoc set',() => {
    const tree = shallow(
      <Root/>
    );
    expect(tree.prop('news')).toBe(42);
  });
});
