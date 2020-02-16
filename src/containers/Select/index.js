import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '../Error';
import { Context } from '../Context';
import { isDataValid } from '../../helpers';

const Select = (props) => {
  const {
    id,
    onFocus,
    onBlur,
    bindTo,
    bindToAlways,
    bindToCallback,
    preOnChange,
    onChange,
    errorMessage,
    children: c,
    sameAs,
    validate,
    ...rest
  } = props;

  return (
    <Context.Consumer>
      {(state) => {
        const {
          data,
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
          <>
            <SelectComponent.type
              {...SelectComponent.props}
              {...rest}
              id={id}
              checked={data[id].checked}
              value={data[id].value}
              onFocus={(e) => handleOnFocus(e, onFocus)}
              onBlur={(e) => handleOnBlur(e, onBlur)}
              onChange={(e) => handleOnChange(
                e,
                data[id].rules,
                {
                  bindTo,
                  bindToAlways,
                  bindToCallback,
                  preOnChange,
                },
                onChange,
              )}
            >
              {c}
            </SelectComponent.type>
            <Error
              data={data}
              id={id}
              errorMessage={errorMessage}
              ErrorLabelComponent={ErrorLabelComponent}
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};

Select.displayName = 'Select';

Select.defaultProps = {
  onFocus: undefined,
  onBlur: undefined,
  bindTo: undefined,
  bindToAlways: false,
  bindToCallback: undefined,
  preOnChange: undefined,
  onChange: undefined,
  sameAs: undefined,
  validate: undefined,
  errorMessage: '',
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  bindTo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  bindToAlways: PropTypes.bool,
  bindToCallback: PropTypes.func,
  preOnChange: PropTypes.func,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  sameAs: PropTypes.string,
  validate: PropTypes.func,
  children: PropTypes.any, // eslint-disable-line
};

export { Select };
