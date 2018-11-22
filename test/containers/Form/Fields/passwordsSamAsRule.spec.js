import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with password input | onChange | test if input has to match sameAs', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const mock = jest.fn();
  const event = {
    target: {
      id: 'password2',
      value: '1234',
    },
  };
  const event2 = {
    target: {
      id: 'password2',
      value: '12345',
    },
  };
  const rules = {
    type: 'password',
    sameAs: 'password2',
  };

  const myComponent = (
    <Form>
      <Field value="12345" type="password" id="password" sameAs="password2" onChange={() => mock()} />
      <Field type="password" id="password2" sameAs="password" onChange={() => mock()} />
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();
  let errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(state.data.password2.value).toBe('');
  expect(state.data.password2.valid).toBe(true);
  expect(errorLabelExists).toBe(false);

  wrapper.find('input#password2').simulate('focus');
  wrapper.find('input#password2').simulate('change', event, rules);
  wrapper.find('input#password2').simulate('blur');

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(state.data.password2.value).toBe('1234');
  expect(state.data.password2.valid).toBe(false);
  expect(errorLabelExists).toBe(true);

  wrapper.find('input#password2').simulate('focus');
  wrapper.find('input#password2').simulate('change', event2, rules);
  wrapper.find('input#password2').simulate('blur');

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(state.data.password2.value).toBe('12345');
  expect(state.data.password2.valid).toBe(true);
  expect(errorLabelExists).toBe(false);

  expect(mock).toBeCalledTimes(2);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
