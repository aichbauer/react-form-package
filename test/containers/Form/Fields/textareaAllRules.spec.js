import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';
import { textareaAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with textarea | textarea all rules', () => {
  const myComponent = (
    <Form>
      <div>
        <div>textarea</div>
        <Field type="textarea" id="textarea" min="30" max="40" required />
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state).toEqual(textareaAllRules);
  expect(tree).toMatchSnapshot();
});
