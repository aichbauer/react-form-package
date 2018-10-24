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

      if (Object.keys(data).length === 0 && data.constructor === Object) {
        return null;
      }

      return (
        <React.Fragment>
          <RadioGroupContainerComponent.type
            {...RadioGroupComponent.props}
            {...props}
            valid={validate && data[props.id].touched && data[props.id].valid}
            invalid={validate && data[props.id].touched && data[props.id].invalid}
            onFocus={(e) => handleOnFocus(e, props.onFocus)}
            onBlur={(e) => handleOnBlur(e, props.onBlur)}
            onChange={(e) => handleOnChange(e, data[props.id].rules, props.onChange)}
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
