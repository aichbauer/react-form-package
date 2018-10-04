import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { timeInputNoRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with time input | time input no rules', () => {
  const myComponent = (
    <Form>
      <div>
        <div>time</div>
        <Field type="time" id="time" />
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state).toEqual(timeInputNoRules);
  expect(tree).toMatchSnapshot();
});
