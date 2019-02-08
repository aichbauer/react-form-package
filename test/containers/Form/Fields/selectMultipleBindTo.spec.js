import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Select,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with select input | bindTo', () => {
  const event = {
    target: {
      id: 'emailTemplate',
      value: 'friends',
    },
  };
  const rules = {
    type: 'select',
    min: '-1',
    max: '-1',
    required: false,
  };

  const myComponent = (
    <Form>
      <Select
        id="emailTemplate"
        bindTo={[
          'subject',
          'body',
        ]}
        bindToAlways
        bindToCallback={(value) => {
          if (value === 'friends') {
            return [
              'Friends',
              'Friends Friends',
            ];
          }

          return [
            'Boss',
            'Boss Boss',
          ];
        }}
      >
        <option disabled value="">
          --- Select an email template ---
        </option>
        <option value="friends">Friends</option>
        <option value="boss">Boss</option>
      </Select>
      <Field
        id="subject"
        type="text"
      />
      <Field
        id="body"
        type="textarea"
        rows="5"
        cols="40"
      />
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(state.data.subject.value).toBe('');
  expect(state.data.body.value).toBe('');

  wrapper.find('select#emailTemplate').simulate('change', event, rules);
  wrapper.update();

  state = wrapper.state();

  expect(state.data.subject.value).toBe('Friends');
  expect(state.data.body.value).toBe('Friends Friends');

  expect(tree).toMatchSnapshot();
});
