import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with 3 checkbox inputs | onChange, bindTo, bindToCallback', () => {
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
    required: false,
  };

  const myComponent = (
    <Form>
      <div>
        <div>checkbox</div>
        <Field
          type="checkbox"
          id="checkbox"
          bindTo={[
            'checkbox1',
            'checkbox2',
          ]}
          bindToCallback={(value) => value}
        />
        <div>checkbox1</div>
        <Field type="checkbox" id="checkbox1" />
        <div>checkbox2</div>
        <Field type="checkbox" id="checkbox2" />
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(state.data.checkbox.value).toBe(false);
  expect(state.data.checkbox.valid).toBe(true);
  expect(state.data.checkbox1.value).toBe(false);
  expect(state.data.checkbox1.valid).toBe(true);
  expect(state.data.checkbox2.value).toBe(false);
  expect(state.data.checkbox2.valid).toBe(true);

  wrapper.find('input#checkbox').simulate('focus', event, rules);
  wrapper.find('input#checkbox').simulate('change', event, rules);
  wrapper.find('input#checkbox').simulate('blur', event, rules);
  wrapper.update();

  state = wrapper.state();

  expect(state.data.checkbox.value).toBe(true);
  expect(state.data.checkbox.valid).toBe(true);
  expect(state.data.checkbox1.value).toBe(true);
  expect(state.data.checkbox1.valid).toBe(true);
  expect(state.data.checkbox2.value).toBe(true);
  expect(state.data.checkbox2.valid).toBe(true);
  expect(handleOnChangeSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
