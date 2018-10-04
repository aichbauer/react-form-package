import React from 'react';
import { Context } from '../Context';

const Button = (props) => (
  <Context.Consumer>
    {(state) => {
      const {
        data,
        formValid,
        validate,
        ButtonComponent,
      } = state;

      let values = {};
      Object.entries(data).forEach((entry) => {
        values = {
          ...values,
          [entry[0]]: entry[1].value,
        };
      });

      return (
        <ButtonComponent.type
          {...ButtonComponent.props}
          {...props}
          id={props.id}
          type={props.type}
          onClick={(e) => {
            e.preventDefault();

            return props.onClick({ data: values, meta: data, formValid });
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

export {
  Button,
};
