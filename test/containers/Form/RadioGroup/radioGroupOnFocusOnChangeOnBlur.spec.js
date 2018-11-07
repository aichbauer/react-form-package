import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  RadioGroup,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with radio input | onFocus | onChange | onBlur', () => {
  const radioGroupFocusSpy = jest.spyOn(Form.prototype, 'handleOnFocus');
  const radioGroupChangeSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const radioGroupBlurSpy = jest.spyOn(Form.prototype, 'handleOnBlur');
  const event = {
    target: {
      id: 'radio1',
      name: 'radio',
      type: 'radio',
    },
  };

  const myComponent = (
    <Form>
      <div>
        <div>radio</div>
        <RadioGroup type="radio" id="radio" required>
          <input type="radio" name="radio" id="radio1" />
          <div type="notradio">radio 1</div>
          <input type="radio" name="radio" id="radio2" />
          <div type="notradio">radio 2</div>
        </RadioGroup>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();
  let errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(state.data.radio.value).toBe('');
  expect(state.data.radio.valid).toBe(false);
  expect(errorLabelExists).toBe(false);

  wrapper.find('input').at(0).simulate('blur');
  wrapper.update();

  errorLabelExists = wrapper.exists('.rfp-error-label');
  expect(errorLabelExists).toBe(true);

  wrapper.find('input').at(0).simulate('focus');
  wrapper.find('input').at(0).simulate('change', event);
  wrapper.find('input').at(0).simulate('blur');
  wrapper.update();

  state = wrapper.state();

  expect(state.data.radio.value).toBe('radio1');
  expect(state.data.radio.valid).toBe(true);

  expect(radioGroupFocusSpy).toHaveBeenCalled();
  expect(radioGroupChangeSpy).toHaveBeenCalled();
  expect(radioGroupBlurSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
