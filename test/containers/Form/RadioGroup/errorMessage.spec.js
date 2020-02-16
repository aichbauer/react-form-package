import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  RadioGroup,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with radio input and custom errorMessage | radio input all rules | onChange -> errorMessage', () => {
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
        <RadioGroup type="radio" id="radio" required errorMessage="error">
          <input type="radio" name="radio" id="radio1" />
          radio 1
          <input type="radio" name="radio" id="radio2" />
          radio 2
        </RadioGroup>
      </div>
    </Form>
  );

  const wrapper = mount(myComponent);

  wrapper.find('input').at(0).simulate('blur', event);
  wrapper.update();

  const errorMessage = wrapper.find('.rfp-error-label').text();

  expect(errorMessage).toBe('error');
});
