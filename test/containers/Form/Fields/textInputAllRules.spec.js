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
  const myComponent = (
    <Form>
      <div>
        <div>text</div>
        <Field type="text" id="text" min="3" max="8" required match={/react/} />
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state).toEqual(textInputAllRules);
  expect(tree).toMatchSnapshot();
});
