import React from 'react';
import PropTypes from 'prop-types';
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
            valid={validate && data[props.id].touched && data[props.id].valid}
            invalid={validate && data[props.id].touched && data[props.id].invalid}
            onFocus={(e) => handleOnFocus(e, props.onFocus)}
            onBlur={(e) => handleOnBlur(e, props.onBlur)}
            onChange={(e) => handleOnChange(
              e,
              data[props.id].rules,
              {
                bindTo: props.bindTo,
                bindToAlways: props.bindToAlways,
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

Select.defaultProps = {
  onFocus: undefined,
  onBlur: undefined,
  bindTo: undefined,
  bindToAlways: false,
  bindToCallback: undefined,
  preOnChange: undefined,
  onChange: undefined,
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
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

export { Select };
