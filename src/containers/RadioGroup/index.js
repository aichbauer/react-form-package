import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '../Error';
import { Context } from '../Context';
import { isDataValid } from '../../helpers';

const RadioGroup = (props) => {
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
          RadioGroupComponent,
          RadioGroupContainerComponent,
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
            <RadioGroupContainerComponent.type
              {...RadioGroupComponent.props}
              {...rest}
              id={id}
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
              {c.map((child) => {
                if (child.type === 'input') {
                  return (
                    <RadioGroupComponent.type
                      {...RadioGroupComponent.props}
                      {...child.props}
                      tabIndex="0"
                      key={child.props.id}
                      value={child.props.id}
                    />
                  );
                }

                return child;
              })}
            </RadioGroupContainerComponent.type>
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

RadioGroup.displayName = 'RadioGroup';

RadioGroup.defaultProps = {
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

RadioGroup.propTypes = {
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

export { RadioGroup };
