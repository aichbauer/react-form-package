import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with text input | onFocus', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnFocus');
  const event = {
    target: {
      id: 'text',
      value: '',
    },
  };
  const rules = {
    type: 'text',
    min: '3',
    max: '8',
    required: true,
  };

  const myComponent = (
    <Form>
      <div>
        <div>text</div>
        <Field type="text" id="text" min="3" max="8" required />
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(state.data.text.value).toBe('');
  expect(state.data.text.valid).toBe(false);

  wrapper.find('input').simulate('focus', event, rules);
  wrapper.update();

  state = wrapper.state();

  expect(state.data.text.value).toBe('');
  expect(state.data.text.valid).toBe(false);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
