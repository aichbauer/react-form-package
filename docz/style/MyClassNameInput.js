import React from 'react';

import './style.css';

const MyClassNameInput = (props) => (
  <input
    className="input"
    id={props.id}
    onFocus={props.onFocus}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
);

export {
  MyClassNameInput,
};
