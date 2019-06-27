import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with text input and validate prop | onChange | test value, valid, invalid, pristine, dirty', () => {
  const event = {
    target: {
      id: 'text',
      value: 'hi',
    },
  };
  const event2 = {
    target: {
      id: 'text',
      value: 'react',
    },
  };
  const rules = {
    type: 'text',
    required: false,
    validate: (value) => value === 'react',
  };

  const myComponent = (
    <Form>
      <div>
        <div>text</div>
        <Field type="text" id="text" validate={(value) => value === 'react'} />
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();
  let errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(state.data.text.value).toBe('');
  expect(state.data.text.valid).toBe(true);
  expect(errorLabelExists).toBe(false);

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur');

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(true);
  expect(state.data.text.value).toBe('hi');
  expect(state.data.text.valid).toBe(false);
  expect(state.data.text.invalid).toBe(true);
  expect(state.data.text.pristine).toBe(false);
  expect(state.data.text.dirty).toBe(true);

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event2, rules);
  wrapper.find('input').simulate('blur');

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(false);
  expect(state.data.text.value).toBe('react');
  expect(state.data.text.valid).toBe(true);
  expect(state.data.text.invalid).toBe(false);
  expect(state.data.text.pristine).toBe(false);
  expect(state.data.text.dirty).toBe(true);
  expect(tree).toMatchSnapshot();
});