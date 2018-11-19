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

test('Render Form with button | add and remove fields | click button', () => {
  const onClickMockRemoveField = jest.fn();
  const onClickMockAddField = jest.fn();

  const companies = [
    {
      id: 'company-0',
    },
  ];

  const myComponent = (
    <Form>
      {companies.map((company) => (
        <div>
          <Field
            id={company.id}
            placeholder={`Company ${company.id.split('-')[1]}`}
            type="text"
            required
          />
          <Button
            id="removeField"
            rfpRole="removeField"
            type="button"
            fieldId={company.id}
            onClick={onClickMockRemoveField}
          >
            Remove Company
          </Button>
        </div>
      ))
      }
      <div>
        <Button
          id="addField"
          rfpRole="addField"
          type="button"
          field={{
            id: 'company-1',
            type: 'text',
            required: true,
          }}
          onClick={onClickMockAddField}
        >
          Add Company
        </Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  const wrapper = mount(myComponent);
  let state = wrapper.state();

  expect(Object.keys(state.data).length).toBe(1);

  wrapper.find('#addField').at(0).simulate('click');
  wrapper.update();

  state = wrapper.state();
  expect(Object.keys(state.data).length).toBe(2);

  wrapper.find('#removeField').at(0).simulate('click');
  wrapper.update();

  state = wrapper.state();
  expect(Object.keys(state.data).length).toBe(1);

  expect(onClickMockRemoveField).toHaveBeenCalled();
  expect(onClickMockAddField).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
