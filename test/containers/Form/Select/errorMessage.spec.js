import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Select,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with select input and custom errorMessage | onBlur -> errorMessage', () => {
  const myComponent = (
    <Form>
      <div>
        <div>select</div>
        <Select type="select" id="select" required errorMessage="error">
          <option disabled value="">-- choose one option --</option>
          <option value="select1">select 1</option>
          <option value="select2">select 2</option>
        </Select>
      </div>
    </Form>
  );

  const wrapper = mount(myComponent);

  wrapper.find('select').simulate('blur');
  wrapper.update();

  const errorMessage = wrapper.find('.rfp-error-label').text();

  expect(errorMessage).toBe('error');
});
