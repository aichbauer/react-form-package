import React from 'react';
import {
  errorStyle,
  writeErrorMessage,
} from '../../helpers';

const Error = (props) => {
  const {
    data,
    id,
    errorMessage,
    ErrorLabelComponent,
  } = props;
  return (
    data[id].invalid && data[id].touched && (
      <ErrorLabelComponent.type
        {...ErrorLabelComponent.props}
        style={errorStyle}
      >
        {errorMessage || writeErrorMessage(data[id].rules)}
      </ErrorLabelComponent.type>
    )
  );
};

export { Error };
