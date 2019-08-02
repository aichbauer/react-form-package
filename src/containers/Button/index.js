import React from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import { createReturnState } from '../../helpers';

const Button = (props) => (
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
          {...props}
          id={props.id}
          type={props.type}
          onClick={(e) => {
            e.preventDefault();

            if (props.rfpRole === 'addField') {
              addField(props.field);
              if (props.onClick) {
                props.onClick();
              }
            }
            if (props.rfpRole === 'removeField') {
              if (props.onClick) {
                props.onClick();
              }
              removeField(props.fieldId);
            }

            if (!props.rfpRole) {
              props.onClick(createReturnState(state));
            }
          }}
          onMouseEnter={(e) => {
            e.preventDefault();

            if (props.onMouseEnter) {
              props.onMouseEnter(e, createReturnState(state));
            }
          }}
          onMouseLeave={(e) => {
            e.preventDefault();

            if (props.onMouseLeave) {
              props.onMouseLeave(e, createReturnState(state));
            }
          }}
          disabled={validate && !props.rfpRole ? !formValid : false}
        >
          {props.children}
        </ButtonComponent.type>
      );
    }}
  </Context.Consumer>
);

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
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ]),
  onClick: PropTypes.func,
  fieldId: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.any, // eslint-disable-line
};


export { Button };
