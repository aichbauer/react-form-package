import React from 'react';
import { Context } from '../Context';
import { writeErrorMessage } from '../../helpers';

const Select = (props) => (
  <Context.Consumer>
    {(state) => {
      const {
        data,
        validate,
        SelectComponent,
        ErrorLabelComponent,
        handleOnFocus,
        handleOnChange,
        handleOnBlur,
      } = state;

      return (
        <React.Fragment>
          <SelectComponent.type
            {...SelectComponent.props}
            {...props}
            checked={data[props.id].checked}
            value={data[props.id].value}
            rows={props.rows}
            cols={props.cols}
            valid={validate && data[props.id].touched && data[props.id].valid}
            invalid={validate && data[props.id].touched && data[props.id].invalid}
            onFocus={(e) => handleOnFocus(e, data[props.id].rules)}
            onBlur={(e) => handleOnBlur(e, data[props.id].rules)}
            onChange={(e) => handleOnChange(e, data[props.id].rules)}
          >
            {props.children}
          </SelectComponent.type>
          {
            data[props.id].invalid && data[props.id].touched && (
              <ErrorLabelComponent.type
                {...ErrorLabelComponent.props}
                style={{
                  whiteSpace: 'pre-line',
                }}
              >
                {writeErrorMessage(data[props.id].rules)}
              </ErrorLabelComponent.type>
            )
          }
        </React.Fragment>
      );
    }}
  </Context.Consumer>
);

Select.displayName = 'Select';

export {
  Select,
};
