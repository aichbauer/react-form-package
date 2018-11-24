import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { dateInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with date input | date input all rules | onChange -> error label', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const event = {
    target: {
      id: 'date',
      value: '2019-12-10',
    },
  };
  const event2 = {
    target: {
      id: 'date',
      value: '2018-11-10',
    },
  };
  const rules = {
    type: 'date',
    min: '2018-10-10',
    max: '2018-12-10',
    required: true,
  };

  const myComponent = (
    <Form>
      <div>
        <div>date</div>
        <Field type="date" id="date" min="2018-10-10" max="2018-12-10" required />
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

  expect(state).toEqual(dateInputAllRules);
  expect(errorLabelExists).toBe(false);

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur');
  wrapper.update();

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(true);
  expect(state.data.date.value).toBe('2019-12-10');
  expect(state.data.date.valid).toBe(false);

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event2, rules);
  wrapper.find('input').simulate('blur');
  wrapper.update();

  state = wrapper.state();
  errorLabelExists = wrapper.exists('.rfp-error-label');

  expect(errorLabelExists).toBe(false);
  expect(state.data.date.value).toBe('2018-11-10');
  expect(state.data.date.valid).toBe(true);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
