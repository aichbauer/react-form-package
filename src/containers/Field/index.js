import React from 'react';
import PropTypes from 'prop-types';
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

Field.defaultProps = {
  rows: undefined,
  cols: undefined,
  onFocus: undefined,
  onBlur: undefined,
  dynamic: false,
  field: undefined,
  bindTo: undefined,
  bindToAlways: false,
  bindToCallback: undefined,
  preOnChange: undefined,
  onChange: undefined,
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.string,
  cols: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  dynamic: PropTypes.bool,
  field: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ]),
  bindTo: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  bindToAlways: PropTypes.bool,
  bindToCallback: PropTypes.func,
  preOnChange: PropTypes.func,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string.isRequired,
  children: PropTypes.any, // eslint-disable-line
};

export { Field };
