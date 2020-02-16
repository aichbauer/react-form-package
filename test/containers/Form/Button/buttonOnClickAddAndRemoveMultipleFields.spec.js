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

  const streets = [
    {
      id: 'street-0',
    },
  ];

  const myComponent = (
    <Form>
      <>
        {streets.map((street) => (
          <div
            key={street.id}
          >
            <Field
              id={street.id}
              type="text"
              required
            />
            <Field
              id={`housenumber-${street.id.split('-')[1]}`}
              type="number"
              required
            />
            <Button
              id="removeField"
              rfpRole="removeField"
              type="button"
              fieldId={[
                street.id,
                `housenumber-${street.id.split('-')[1]}`,
              ]}
              onClick={onClickMockRemoveField}
            >
              Remove Company
            </Button>
          </div>
        ))}
      </>
      <div>
        <Button
          id="addField"
          rfpRole="addField"
          type="button"
          field={[
            {
              id: 'street-1',
              type: 'text',
              required: true,
            },
            {
              id: 'housnumber-1',
              type: 'number',
              required: true,
            },
          ]}
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

  expect(Object.keys(state.data).length).toBe(2);

  wrapper.find('#addField').at(0).simulate('click');
  wrapper.update();

  state = wrapper.state();
  expect(Object.keys(state.data).length).toBe(4);

  wrapper.find('#removeField').at(0).simulate('click');
  wrapper.update();

  state = wrapper.state();
  expect(Object.keys(state.data).length).toBe(2);

  expect(onClickMockRemoveField).toHaveBeenCalled();
  expect(onClickMockAddField).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
