import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Field,
  Button,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form (validate) with button | click button', () => {
  const onClickMock = jest.fn();

  const myComponent = (
    <Form
      validate
    >
      <div>
        <div>checkbox</div>
        <Field type="checkbox" id="checkbox" />
      </div>
      <div>
        <Button id="submit" type="submit" onClick={onClickMock}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);

  wrapper.find('button').simulate('click');
  wrapper.update();

  expect(onClickMock).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
