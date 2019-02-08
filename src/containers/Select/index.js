import React from 'react';
import { Error } from '../Error';
import { Context } from '../Context';
import { isDataValid } from '../../helpers';

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

      if (!isDataValid(data, props)) {
        return null;
      }

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
            onFocus={(e) => handleOnFocus(e, props.onFocus)}
            onBlur={(e) => handleOnBlur(e, props.onBlur)}
            onChange={(e) => handleOnChange(
              e,
              data[props.id].rules,
              {
                bindTo: props.bindTo,
                bindToAllways: props.bindToAllways,
                bindToCallback: props.bindToCallback,
                preOnChange: props.preOnChange,
              },
              props.onChange,
            )}
          >
            {props.children}
          </SelectComponent.type>
          <Error
            data={data}
            id={props.id}
            errorMessage={props.errorMessage}
            ErrorLabelComponent={ErrorLabelComponent}
          />
        </React.Fragment>
      );
    }}
  </Context.Consumer>
);

Select.displayName = 'Select';

export { Select };
