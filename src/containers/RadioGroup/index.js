import React from 'react';
import { Context } from '../Context';
import { writeErrorMessage } from '../../helpers';

const RadioGroup = (props) => (
  <Context.Consumer>
    {(state) => {
      const {
        data,
        validate,
        RadioGroupComponent,
        RadioGroupContainerComponent,
        ErrorLabelComponent,
        handleOnFocus,
        handleOnChange,
        handleOnBlur,
      } = state;

      return (
        <React.Fragment>
          <RadioGroupContainerComponent.type
            {...RadioGroupComponent.props}
            {...props}
            valid={validate && data[props.id].touched && data[props.id].valid}
            invalid={validate && data[props.id].touched && data[props.id].invalid}
            onFocus={(e) => handleOnFocus(e, data[props.id].rules)}
            onBlur={(e) => handleOnBlur(e, data[props.id].rules)}
            onChange={(e) => handleOnChange(e, data[props.id].rules)}
          >
            {props.children.map((child) => {
              if (child.type === 'input') {
                return (
                  <RadioGroupComponent.type
                    tabIndex="0"
                    key={child.props.id}
                    {...RadioGroupComponent.props}
                    {...child.props}
                    value={child.props.id}
                  />
                );
              }

              return child;
            })}
          </RadioGroupContainerComponent.type>
          {data[props.id].invalid && data[props.id].visited && (
            <ErrorLabelComponent.type
              {...ErrorLabelComponent.props}
              style={{
                whiteSpace: 'pre-line',
              }}
            >
              {writeErrorMessage(data[props.id].rules)}
            </ErrorLabelComponent.type>
          )}
        </React.Fragment>
      );
    }}
  </Context.Consumer>
);

RadioGroup.displayName = 'RadioGroup';

export {
  RadioGroup,
};
