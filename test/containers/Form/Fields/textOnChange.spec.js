import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with text input | onChange | test value, valid, invalid, pristine, dirty', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const mock = jest.fn();
  const event = {
    target: {
      id: 'text',
      value: 'hi',
    },
  };
  const rules = {
    type: 'text',
    min: '3',
    max: '8',
    required: false,
  };

  const myComponent = (
    <Form>
      <div>
        <div>text</div>
        <Field type="text" id="text" min="3" max="8" match={/react/} onChange={() => mock()} onBlur={() => mock()} />
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

  wrapper.find('input').simulate('focus', event, rules);
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur', event, rules);

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(true);
  expect(state.data.text.value).toBe('hi');
  expect(state.data.text.valid).toBe(false);
  expect(state.data.text.invalid).toBe(true);
  expect(state.data.text.pristine).toBe(false);
  expect(state.data.text.dirty).toBe(true);
  expect(mock).toBeCalledTimes(2);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
