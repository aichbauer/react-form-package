import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { numberInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with number input | number input all rules | onChange -> error label', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const event = {
    target: {
      id: 'number',
      value: 'h',
    },
  };
  const rules = {
    type: 'number',
    min: -1,
    max: -1,
    required: true,
  };

  const myComponent = (
    <Form>
      <div>
        <div>number</div>
        <Field type="number" id="number" min="2" max="4" required />
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

  expect(state).toEqual(numberInputAllRules);
  expect(errorLabelExists).toBe(false);

  wrapper.find('input').simulate('focus', event, rules);
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur', event, rules);

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(true);
  expect(state.data.number.value).toBe('h');
  expect(state.data.number.valid).toBe(false);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
