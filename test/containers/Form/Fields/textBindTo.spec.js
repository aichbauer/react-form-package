import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { textInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with text input | text input all rules', () => {
  const mock = jest.fn();
  const event = {
    target: {
      id: 'housenumbers',
      value: '1-2',
    },
  };
  const rules = {
    type: 'text',
    min: '-1',
    max: '-1',
    required: false,
  };

  const myComponent = (
    <Form>
      <Field
        id="housenumbers"
        type="text"
        bindTo="households"
        placeholder="2-7"
        bindToCallback={mock}
      />
      <Field
        id="households"
        type="number"
        placeholder="6"
      />
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);

  wrapper.find('input#housenumbers').simulate('focus');
  wrapper.find('input#housenumbers').simulate('change', event, rules);
  wrapper.find('input#housenumbers').simulate('blur');

  expect(mock).toBeCalledTimes(1);
  expect(tree).toMatchSnapshot();
});
