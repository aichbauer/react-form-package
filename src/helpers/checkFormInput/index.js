import inputIs from 'input-is';

const checkFormInput = (rules, value) => {
  const validateArray = [];

  if (!rules.required && !value) {
    return true;
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

  if (rules.min && rules.min !== -1) {
    validateArray.push(inputIs.min(value, rules.min));
  }
  if (rules.max && rules.max !== -1) {
    validateArray.push(inputIs.max(value, rules.max));
  }
  if (rules.required && rules.type === 'checkbox') {
    validateArray.push(value);
  }
  if (rules.required && rules.type !== 'checkbox') {
    validateArray.push(inputIs.filled(value));
  }

  const valid = validateArray.every((val) => val);

  return valid;
};

export {
  checkFormInput,
};
