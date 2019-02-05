import React from 'react';
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

export { Button };
