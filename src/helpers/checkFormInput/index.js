import inputIs from 'input-is';

const checkFormInput = (rules, value, data) => {
  const validateArray = [];
  const text = rules.type === 'text'
    || rules.type === 'textarea';
  const password = rules.type === 'password';
  const number = rules.type === 'number';
  const date = rules.type === 'date';

  if (!rules.required && !value) {
    return true;
  }

  if (!data) {
    return false;
  }
  if (rules.sameAs && data[rules.sameAs]) {
    validateArray.push(value === data[rules.sameAs].value);
  } else if (rules.sameAs && !data[rules.sameAs]) {
    validateArray.push(false);
  }

  if (rules.validate) {
    validateArray.push(rules.validate(value));
  }

  switch (rules.type) {
    case 'date':
      validateArray.push(inputIs.date(value, 'YYYY-MM-DD'));
      break;
    case 'datetime-local':
      validateArray.push(inputIs.datetime(value, 'YYYY-MM-DD'));
      break;
    case 'email':
      validateArray.push(inputIs.email(value));
      break;
    case 'number':
      validateArray.push(inputIs.number(value));
      break;
    case 'radio':
    case 'select':
      validateArray.push(inputIs.filled(value));
      break;
    case 'tel':
      validateArray.push(inputIs.phonenumber(value));
      break;
    case 'time':
      validateArray.push(inputIs.time(value));
      break;
    case 'url':
      validateArray.push(inputIs.url(value));
      break;
    default:
      break;
  }

  if ((text || password) && rules.min) {
    validateArray.push(inputIs.min(value, rules.min));
  }
  if ((text || password) && rules.max) {
    validateArray.push(inputIs.max(value, rules.max));
  }
  if (number && rules.min) {
    validateArray.push(value >= rules.min);
  }
  if (number && rules.max) {
    validateArray.push(value <= rules.max);
  }
  if (date && rules.min) {
    validateArray.push(new Date(value) >= new Date(rules.min));
  }
  if (date && rules.max) {
    validateArray.push(new Date(value) <= new Date(rules.max));
  }
  if (rules.required && rules.type === 'checkbox') {
    validateArray.push(value);
  }
  if (rules.required && rules.type !== 'checkbox') {
    validateArray.push(inputIs.filled(value));
  }
  if (rules.match) {
    validateArray.push(inputIs.valid(value, rules.match));
  }

  const valid = validateArray.every((val) => val);

  return valid;
};

export {
  checkFormInput,
};
