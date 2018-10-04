import React from 'react';

const MyInput = (props) => (
  <input
    style={{
      margin: '10px 0px',
      padding: '8px 3px',
      border: '1px solid #7FDBFF',
      borderRadius: '5px',
      color: 'black',
    }}
    id={props.id}
    onFocus={props.onFocus}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
);

export {
  MyInput,
};
