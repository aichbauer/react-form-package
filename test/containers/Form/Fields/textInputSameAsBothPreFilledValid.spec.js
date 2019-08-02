import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with two text inputs and pre filled value | sameAs | both should be valid', () => {
  const myComponent = (
    <Form>
      <Field type="text" sameAs="text2" id="text" required value="Test" />
      <Field type="text" sameAs="text" id="text2" required value="Test" />
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state.data.text.value).toBe('Test');
  expect(state.data.text.valid).toBe(true);
  expect(state.data.text2.value).toBe('Test');
  expect(state.data.text2.valid).toBe(true);

  expect(tree).toMatchSnapshot();
});
