import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '../Error';
import { Context } from '../Context';
import { isDataValid } from '../../helpers';

const FieldWrapper = (props) => {
  const {
    id,
    type,
    onFocus,
    onBlur,
    dynamic,
    field,
    bindTo,
    bindToAlways,
    bindToCallback,
    preOnChange,
    onChange,
    errorMessage,
    sameAs,
    validate,
    children: c,
    ...rest
  } = props;

  return (
    <Context.Consumer>
      {(state) => {
        const {
          data,
          ErrorLabelComponent,
          handleOnFocus,
          handleOnChange,
          handleOnBlur,
          validateOnClick,
          buttonClicked,
        } = state;

        if (!isDataValid(data, props)) {
          return null;
        }

        const e = (input) => ({
          target:
          {
            id,
            value: input,
            checked: type === 'checkbox' ? input : undefined,
            type,
          },
        });

        const children = React.Children.map(c, (child) => (
          React.cloneElement(child, {
            ...rest,
            ...child.props,
            id,
            key: id,
            onFocus: (input) => handleOnFocus(
              e(input),
              onFocus,
            ),
            onBlur: (input) => handleOnBlur(
              e(input),
              onBlur,
            ),
            onChange: (input) => handleOnChange(
              e(input),
              data[id].rules,
              {
                dynamic,
                field,
                bindTo,
                bindToAlways,
                bindToCallback,
                preOnChange,
              },
              onChange,
            ),
            meta: data[id],
          })
        ));

        return (
          <>
            {children}
            <Error
              data={data}
              id={id}
              errorMessage={errorMessage}
              ErrorLabelComponent={ErrorLabelComponent}
              validateOnClick={validateOnClick}
              buttonClicked={buttonClicked}
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};

FieldWrapper.displayName = 'FieldWrapper';

FieldWrapper.defaultProps = {
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
  dynamic: false,
  field: undefined,
  sameAs: undefined,
  validate: undefined,
  bindTo: undefined,
  bindToAlways: undefined,
  bindToCallback: undefined,
  preOnChange: undefined,
  errorMessage: '',
};

FieldWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  dynamic: PropTypes.bool,
  sameAs: PropTypes.string,
  validate: PropTypes.func,
  field: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  bindTo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  bindToAlways: PropTypes.bool,
  bindToCallback: PropTypes.func,
  preOnChange: PropTypes.func,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export { FieldWrapper };
