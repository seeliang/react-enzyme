
import React from 'react';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Root from '../../root';

Enzyme.configure({ adapter: new Adapter() });

describe('some basics', () => {
  it('shall render', () => {
    mount(
      <Root />,
    );
  });

  it('shall have input', () => {
    const tree = mount(
      <Root />,
    );
    expect(tree.find('input')).toHaveLength(1);
  });

  it('shall have hoc set', () => {
    const tree = shallow(
      <Root />,
    );
    expect(tree.prop('news')).toBe(42);
  });

  it('shall be able to submit', () => {
    const submit = jest.fn();
    const tree = mount(
      <Root submit={submit} />,
    );
    tree.find('form').simulate('submit');
    expect(submit.mock.calls).toHaveLength(1);
  });
});
