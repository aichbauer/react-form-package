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

  console.log('ErrorLabelComponent');
  console.log(ErrorLabelComponent);

  console.log('props');
  console.log(props);

  return (
    data[id].invalid && data[id].touched && (
      <ErrorLabelComponent.type
        {...ErrorLabelComponent.props}
        style={{
          ...errorStyle,
          ...ErrorLabelComponent.props.style,
        }}
      >
        {errorMessage || writeErrorMessage(data[id].rules)}
      </ErrorLabelComponent.type>
    )
  );
};

export { Error };
