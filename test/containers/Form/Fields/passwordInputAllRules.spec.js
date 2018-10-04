import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { passwordInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with password input | password input all rules', () => {
  const myComponent = (
    <Form>
      <div>
        <div>password</div>
        <Field type="password" id="password" min="8" max="15" required />
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state).toEqual(passwordInputAllRules);
  expect(tree).toMatchSnapshot();
});
