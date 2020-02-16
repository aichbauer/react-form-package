import React from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import { createReturnState } from '../../helpers';

const Button = (props) => {
  const {
    id,
    type,
    rfpRole,
    field,
    onClick,
    fieldId,
    onMouseEnter,
    onMouseLeave,
    children,
    ...rest
  } = props;

  return (
    <Context.Consumer>
      {(state) => {
        const {
          formValid,
          validate,
          ButtonComponent,
          addField,
          removeField,
        } = state;

        return (
          <ButtonComponent.type
            {...ButtonComponent.props}
            {...rest}
            id={id}
            type={type}
            onClick={(e) => {
              e.preventDefault();

              if (rfpRole === 'addField') {
                addField(field);
                if (onClick) {
                  onClick();
                }
              }
              if (rfpRole === 'removeField') {
                if (onClick) {
                  onClick();
                }
                removeField(fieldId);
              }

              if (!rfpRole) {
                onClick(createReturnState(state));
              }
            }}
            onMouseEnter={(e) => {
              e.preventDefault();

              if (onMouseEnter) {
                onMouseEnter(e, createReturnState(state));
              }
            }}
            onMouseLeave={(e) => {
              e.preventDefault();

              if (onMouseLeave) {
                onMouseLeave(e, createReturnState(state));
              }
            }}
            disabled={validate && !rfpRole ? !formValid : false}
          >
            {children}
          </ButtonComponent.type>
        );
      }}
    </Context.Consumer>
  );
};

Button.displayName = 'Button';

Button.defaultProps = {
  rfpRole: undefined,
  field: undefined,
  onClick: undefined,
  fieldId: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rfpRole: PropTypes.string,
  field: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    })),
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
    }),
  ]),
  onClick: PropTypes.func,
  fieldId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.any, // eslint-disable-line
};


export { Button };
