import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  FieldWrapper,
  Button,
} from '../../../../src';
import { textInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with text input | FieldWrapper | text input all rules', () => {
  const mock = jest.fn();
  const fieldWrapperOnChangeSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const fieldWrapperOnFocusSpy = jest.spyOn(Form.prototype, 'handleOnFocus');
  const fieldWrapperOnBlurSpy = jest.spyOn(Form.prototype, 'handleOnBlur');

  const event = {
    target: {
      id: 'text',
      value: 'hello',
    },
  };
  const rules = {
    type: 'text',
    min: '3',
    max: '8',
    required: false,
  };

  const CustomInput = (props) => (
    <input
      onChange={(e) => props.onChange(e.target.value)}
      onFocus={(e) => props.onFocus(e.target.value)}
      onBlur={(e) => props.onBlur(e.target.value)}
      meta={props.meta}
    />
  );

  const myComponent = (
    <Form>
      <div>
        <div>text</div>
        <FieldWrapper onChange={() => mock()} type="text" id="text" min="3" max="8" required>
          <CustomInput />
        </FieldWrapper>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const exposedPropsOnCustomComponent = wrapper.find('input').props();
  let state = wrapper.state();

  expect(exposedPropsOnCustomComponent).toHaveProperty('onChange');
  expect(exposedPropsOnCustomComponent).toHaveProperty('onFocus');
  expect(exposedPropsOnCustomComponent).toHaveProperty('onBlur');
  expect(exposedPropsOnCustomComponent).toHaveProperty('meta');
  expect(state.data.text.value).toBe('');
  expect(state.data.text.valid).toBe(false);

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur');
  wrapper.update();

  state = wrapper.state();

  expect(state.data.text.value).toBe('hello');
  expect(state.data.text.valid).toBe(true);
  expect(fieldWrapperOnChangeSpy).toHaveBeenCalled();
  expect(fieldWrapperOnFocusSpy).toHaveBeenCalled();
  expect(fieldWrapperOnBlurSpy).toHaveBeenCalled();
  expect(mock).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
