import { checkFormInput } from '../checkFormInput';

const initialState = (props, data) => {
  const text = props.type === 'text'
    || props.type === 'textarea';
  const password = props.type === 'password';
  const number = props.type === 'number';
  const date = props.type === 'date';
  const value = props.type === 'checkbox'
    ? props.checked || false
    : props.value || '';
  const checked = props.type === 'checkbox'
    ? props.checked || false
    : undefined;

  let max;
  let min;
  if (text || password) {
    max = props.max && parseInt(props.max, 10);
    min = props.min && parseInt(props.min, 10);
  } else if (number) {
    max = props.max && parseInt(props.max, 10);
    min = props.min && parseInt(props.min, 10);
  } else if (date) {
    max = props.max; // eslint-disable-line
    min = props.min; // eslint-disable-line
  }

  const rules = {
    type: props.type,
    min,
    max,
    required: props.required || false,
    match: props.match,
    sameAs: props.sameAs,
  };

  const valid = checkFormInput(rules, value, data);

  return ({
    initialValue: value,
    dirty: false,
    pristine: true,
    visited: false,
    touched: false,
    checked,
    value,
    valid,
    invalid: !valid,
    rules,
  });
};

export {
  initialState,
};
