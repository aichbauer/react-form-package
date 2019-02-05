import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import {
  Form,
  Button,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form (validate) with disabled button | on mouse enter button', () => {
  const onMouseEnterMock = jest.fn();
  const onMouseLeaveMock = jest.fn();

  const myComponent = (
    <Form
      validate
    >
      <div>
        <Button
          id="submit"
          type="submit"
          disabled
          onMouseEnter={onMouseEnterMock}
          onMouseLeave={onMouseLeaveMock}
        >
          submit
        </Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);

  wrapper.find('button').simulate('mouseenter');
  wrapper.update();
  wrapper.find('button').simulate('mouseleave');
  wrapper.update();

  expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
  expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
  expect(tree).toMatchSnapshot();
});
