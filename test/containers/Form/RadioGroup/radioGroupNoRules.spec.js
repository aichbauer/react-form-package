import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  RadioGroup,
  Button,
} from '../../../../src';
import { radioGroupNoRules } from '../../../fixtures';

configure({ adapter: new Adapter() });

test('Render Form with radio input | radio input no rules', () => {
  const myComponent = (
    <Form>
      <div>
        <div>radio</div>
        <RadioGroup type="radio" id="radio">
          <input type="radio" name="radio" id="radio1" />
          radio 1
          <input type="radio" name="radio" id="radio2" />
          radio 2
        </RadioGroup>
      </div>
      <div>
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  const state = wrapper.state();

  expect(state).toEqual(radioGroupNoRules);
  expect(tree).toMatchSnapshot();
});
