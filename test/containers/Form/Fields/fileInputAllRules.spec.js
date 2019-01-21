import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import {
  Form,
  Field,
} from '../../../../src';

configure({ adapter: new Adapter() });

test('Render Form with file input | file input all rules | preOnChange -> should take files not value', () => {
  const event = {
    target: {
      id: 'file',
      type: 'file',
      value: 'value',
      files: {
        0: 'i am a file trust me',
      },
    },
  };
  const rules = {
    type: 'file',
  };
  const options = {
    preOnChange: () => ({ 0: 'compressed file' }),
  };

  const myComponent = (
    <Form>
      <div>
        <div>email</div>
        <Field
          type="file"
          id="file"
        />
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();

  const wrapper = shallow(<Form />);
  const instance = wrapper.instance();

  instance.setInitialState([
    <Field
      type="file"
      id="file"
    />,
  ]);
  wrapper.update();

  instance.handleOnChange(event, rules, options);
  wrapper.update();

  const state = wrapper.state();

  expect(state.data.file.value).toBe('value');
  expect(state.data.file.files).toEqual({ 0: 'compressed file' });

  expect(tree).toMatchSnapshot();
});
