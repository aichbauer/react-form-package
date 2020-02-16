import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { telInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with tel input | tel input all rules | onChange -> error label', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const event = {
    target: {
      id: 'tel',
      value: 'h',
    },
  };
  const rules = {
    type: 'tel',
    min: -1,
    max: -1,
    required: true,
  };

  const myComponent = (
    <Form>
      <div>
        <div>tel</div>
        <Field type="tel" id="tel" required />
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

  expect(state).toEqual(telInputAllRules);
  expect(errorLabelExists).toBe(false);

  wrapper.find('input').simulate('focus', event, rules);
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur', event, rules);

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(true);
  expect(state.data.tel.value).toBe('h');
  expect(state.data.tel.valid).toBe(false);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
