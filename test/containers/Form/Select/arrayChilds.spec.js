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

const data = [
  {
    value: 'select1',
    name: 'select 1',
  },
  {
    value: 'select2',
    name: 'select 2',
  },
];

test('Render Form with select input | select input all rules', () => {
  const myComponent = (
    <Form>
      <div>
        <div>select</div>
        <Select type="select" id="select" required>
          <option disabled value="">-- choose one option --</option>
          {data.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
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
