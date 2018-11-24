import { checkFormInput } from '../checkFormInput';

const initialState = (props) => {
  const text = props.type === 'text'
    || props.type === 'textarea';
  const password = props.type === 'password';
  const value = props.type === 'checkbox'
    ? props.checked || false
    : props.value || '';
  const checked = props.type === 'checkbox'
    ? props.checked || false
    : undefined;

  const min = text || password
    ? parseInt(props.min, 10) || -1
    : undefined;
  const max = text || password
    ? parseInt(props.max, 10) || -1
    : undefined;

  const rules = {
    type: props.type,
    min,
    max,
    required: props.required || false,
    match: props.match,
    sameAs: props.sameAs,
  };
  const valid = checkFormInput(rules, value);

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
