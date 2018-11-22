import { checkFormInput } from '../checkFormInput';

const initialState = (props) => {
  const value = props.type === 'checkbox'
    ? props.checked || false
    : props.value || '';
  const checked = props.type === 'checkbox'
    ? props.checked || false
    : undefined;
  const rules = {
    type: props.type,
    min: props.min || -1,
    max: props.max || -1,
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
