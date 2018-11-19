import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with text input | add new Field onChange', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const mock = jest.fn();
  const event = {
    target: {
      id: 'text',
      value: 'hi',
    },
  };
  const rules = {
    type: 'text',
    min: '3',
    max: '8',
    required: false,
  };

  const myComponent = (
    <Form>
      <div>
        <div>text</div>
        <Field
          type="text"
          id="text"
          min="3"
          max="8"
          dynamic
          field={{
            id: 'text-1',
          }}
          onChange={() => mock()}
          onBlur={() => mock()}
        />
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(Object.keys(state.data).length).toBe(1);

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur');

  state = wrapper.state();
  expect(Object.keys(state.data).length).toBe(2);

  expect(mock).toBeCalledTimes(2);
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
