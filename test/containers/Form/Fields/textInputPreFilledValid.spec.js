import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with text input and pre filled value | should be valid', () => {
  const myComponent = (
    <Form>
      <Field type="text" id="text" required value="Test" />
      <Field type="text" id="text2" max="3" value="Test2" />
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state.data.text.value).toBe('Test');
  expect(state.data.text.valid).toBe(true);
  expect(state.data.text2.value).toBe('Test2');
  expect(state.data.text2.valid).toBe(false);

  expect(tree).toMatchSnapshot();
});
