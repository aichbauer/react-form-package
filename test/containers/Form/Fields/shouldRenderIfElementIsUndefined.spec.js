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

test('Render Form even if element is undefined', () => {
  const myComponent = (
    <Form>
      <div>
        <div>tel</div>
        <Field type="tel" id="tel" />
      </div>
      <div>
        {undefined}
        <Button id="submit" type="submit" onClick={(state) => state}>submit</Button>
      </div>
    </Form>
  );

  const tree = renderer.create(myComponent).toJSON();
  expect(tree).toMatchSnapshot();
});
