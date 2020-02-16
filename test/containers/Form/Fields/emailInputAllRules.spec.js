import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { emailInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with email input | email input all rules | onChange -> error label', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
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
        <Field type="email" id="email" required />
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();
  let errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(state).toEqual(emailInputAllRules);
  expect(errorLabelExists).toBe(false);

  wrapper.find('input').simulate('focus', event, rules);
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur', event, rules);
  wrapper.update();

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(true);
  expect(state.data.email.value).toBe('h');
  expect(state.data.email.valid).toBe(false);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
