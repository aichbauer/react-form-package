import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form (validate, validateOnClick) with button | click button | show errors', () => {
  const myComponent = (
    <Form
      validate
      validateOnClick
    >
      <div>
        <div>email</div>
        <Field type="email" id="email" required errorMessage="error" />
      </div>
      <div>
        <Button id="submit" type="submit" onClick={() => {}}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);

  wrapper.find('button').simulate('click');
  wrapper.update();

  const errorMessage = wrapper.find('.rfp-error-label').text();

  expect(errorMessage).toBe('error');
  expect(tree).toMatchSnapshot();
});
