import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '../Error';
import { Context } from '../Context';
import { isDataValid } from '../../helpers';

const FieldWrapper = (props) => (
  <Context.Consumer>
    {(state) => {
      const {
        data,
        ErrorLabelComponent,
        handleOnFocus,
        handleOnChange,
        handleOnBlur,
      } = state;

      if (!isDataValid(data, props)) {
        return null;
      }

      const e = (input) => ({
        target:
        {
          id: props.id,
          value: input,
          checked: props.type === 'checkbox' ? input : undefined,
          type: props.type,
        },
      });

      const children = React.Children.map(props.children, (child) => (
        React.cloneElement(child, {
          ...props,
          ...child.props,
          onFocus: (input) => handleOnFocus(
            e(input),
            props.onFocus,
          ),
          onBlur: (input) => handleOnBlur(
            e(input),
            props.onBlur,
          ),
          onChange: (input) => handleOnChange(
            e(input),
            data[props.id].rules,
            {
              dynamic: props.dynamic,
              field: props.field,
              bindTo: props.bindTo,
              bindToCallback: props.bindToCallback,
            },
            props.onChange,
          ),
        })
      ));

      return (
        <React.Fragment>
          {children}
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

FieldWrapper.displayName = 'FieldWrapper';

FieldWrapper.defaultProps = {
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
  dynamic: false,
  field: undefined,
  bindTo: undefined,
  bindToCallback: undefined,
};

FieldWrapper.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  dynamic: PropTypes.bool,
  field: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  bindTo: PropTypes.string,
  bindToCallback: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export { FieldWrapper };
