import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with checkbox input | onChange', () => {
  const handleOnChangeSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const event = {
    target: {
      id: 'checkbox',
      value: true,
      checked: true,
      type: 'checkbox',
    },
  };
  const rules = {
    type: 'checkbox',
    min: -1,
    max: -1,
    required: true,
  };

  const myComponent = (
    <Form>
      <div>
        <div>checkbox</div>
        <Field type="checkbox" id="checkbox" required />
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(state.data.checkbox.value).toBe(false);
  expect(state.data.checkbox.valid).toBe(false);


  wrapper.find('input').simulate('focus', event, rules);
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur', event, rules);
  wrapper.update();

  state = wrapper.state();

  expect(state.data.checkbox.value).toBe(true);
  expect(state.data.checkbox.valid).toBe(true);
  expect(handleOnChangeSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
