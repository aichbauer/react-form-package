import React from 'react';
import { Error } from '../Error';
import { Context } from '../Context';
import { isDataValid } from '../../helpers';

const Field = (props) => (
  <Context.Consumer>
    {(state) => {
      const {
        data,
        validate,
        InputComponent,
        CheckboxComponent,
        TextareaComponent,
        ErrorLabelComponent,
        handleOnFocus,
        handleOnChange,
        handleOnBlur,
      } = state;
      let MyInputComponent;

      if (!isDataValid(data, props)) {
        return null;
      }

      if (data[props.id].rules.type === 'checkbox') {
        MyInputComponent = CheckboxComponent;
      } else if (data[props.id].rules.type === 'textarea') {
        MyInputComponent = TextareaComponent;
      } else {
        MyInputComponent = InputComponent;
      }

      return (
        <React.Fragment>
          <MyInputComponent.type
            {...MyInputComponent.props}
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
                dynamic: props.dynamic,
                field: props.field,
                bindTo: props.bindTo,
                bindToAlways: props.bindToAlways,
                bindToCallback: props.bindToCallback,
                preOnChange: props.preOnChange,
              },
              props.onChange,
            )}
          />
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

Field.displayName = 'Field';

export { Field };
