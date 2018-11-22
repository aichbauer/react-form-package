import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with text input | preOnChange | manipulate the input value to be duplicated', () => {
  const fieldSpy = jest.spyOn(Form.prototype, 'handleOnChange');
  const event = {
    target: {
      id: 'text',
      value: 'hi',
    },
  };
  const rules = {
    type: 'text',
  };

  const myComponent = (
    <Form>
      <div>
        <div>text</div>
        <Field type="text" id="text" preOnChange={(value) => `${value} ${value}`} />
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(state.data.text.value).toBe('');

  wrapper.find('input').simulate('focus');
  wrapper.find('input').simulate('change', event, rules);
  wrapper.find('input').simulate('blur');

  state = wrapper.state();

  expect(state.data.text.value).toBe('hi hi');
  expect(fieldSpy).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
