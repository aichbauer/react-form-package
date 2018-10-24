import React from 'react';

import { Field } from '../../src';

const DynamicFields = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      <Field id="kjfas" type="checkbox" />
      {data.map((checkbox) => (
        <React.Fragment>
          <div>{checkbox.name}</div>
          <Field id={checkbox.id} type="checkbox" ref={checkbox.id} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export { DynamicFields };
