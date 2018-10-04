import React from 'react';

import './style.css';

const MyClassNameButton = (props) => (
  <button
    type="submit"
    className="button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export {
  MyClassNameButton,
};
