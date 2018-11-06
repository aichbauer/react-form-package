import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with email input and custom errorMessage | email input all rules | onChange -> errorMessage', () => {
  const event = {
    target: {
      id: 'email',
      value: 'h',
    },
  };
  const rules = {
    type: 'email',
    min: -1,
    max: -1,
    required: true,
  };

  const myComponent = (
    <Form>
      <div>
        <div>email</div>
        <Field type="email" id="email" required errorMessage="error" />
      </div>
    </Form>
  );

  const wrapper = mount(myComponent);

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur');
  wrapper.update();

  const errorMessage = wrapper.find('.rfp-error-label').text();

  expect(errorMessage).toBe('error');
});
