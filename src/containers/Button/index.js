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
      } = state;

      return (
        <ButtonComponent.type
          {...ButtonComponent.props}
          {...props}
          id={props.id}
          type={props.type}
          onClick={(e) => {
            e.preventDefault();

            return props.onClick(createReturnState(state));
          }}
          disabled={validate ? !formValid : false}
        >
          {props.children}
        </ButtonComponent.type>
      );
    }}
  </Context.Consumer>
);

Button.displayName = 'Button';

export { Button };
