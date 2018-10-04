import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Select,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with select input | onFocus | onBlur', () => {
  const selectFocusSpy = jest.spyOn(Form.prototype, 'handleOnFocus');
  const selectBlurSpy = jest.spyOn(Form.prototype, 'handleOnBlur');
  const event = {
    target: {
      id: 'select',
      value: '',
    },
  };
  const rules = {
    type: 'select',
    min: -1,
    max: -1,
    required: true,
  };

  const myComponent = (
    <Form>
      <div>
        <div>select</div>
        <Select type="select" id="select" required>
          <option disabled value="">-- choose one option --</option>
          <option value="select1">select 1</option>
          <option value="select2">select 2</option>
        </Select>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(state.data.select.value).toBe('');
  expect(state.data.select.valid).toBe(false);

  wrapper.find('select').simulate('focus', event, rules);
  wrapper.find('select').simulate('blur');
  wrapper.update();

  state = wrapper.state();

  expect(state.data.select.value).toBe('');
  expect(state.data.select.valid).toBe(false);
  expect(selectFocusSpy).toHaveBeenCalled();
  expect(selectBlurSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
