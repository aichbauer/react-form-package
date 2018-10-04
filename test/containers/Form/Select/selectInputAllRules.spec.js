import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Select,
  Button,
} from '../../../../src';
import { selectInputAllRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with select input | select input all rules', () => {
  const myComponent = (
    <Form>
      <div>
        <div>select</div>
        <Select type="select" id="select" required>
          <option disabled value="">-- choose one option --</option>
          <option value="select1">select 1</option>
          <option value="select2">select 2</option>
        </Select>
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state).toEqual(selectInputAllRules);
  expect(tree).toMatchSnapshot();
});
