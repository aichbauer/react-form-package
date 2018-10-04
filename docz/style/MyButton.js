import React from 'react';

const MyButton = (props) => (
  <button
    type="submit"
    style={{
      margin: '10px 0px',
      padding: '8px 24px',
      borderRadius: '5px',
      border: 'none',
      background: '#7FDBFF',
      color: '#001f3f',
      cursor: 'pointer',
    }}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export {
  MyButton,
};
