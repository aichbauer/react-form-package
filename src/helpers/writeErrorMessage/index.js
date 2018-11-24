import warningMessage from 'warning-message';

const writeErrorMessage = (rules) => {
  const {
    type,
    required,
    max,
    min,
    match,
  } = rules;
  const text = type === 'text'
    || type === 'textarea';
  const password = type === 'password';

  let message = '';

  if (rules.sameAs) {
    message += `${`The value of this input has to be the same as in input: ${rules.sameAs}`} \n`;
  }

  switch (type) {
    case 'date':
      message += `${warningMessage().date()} \n`;
      break;
    case 'datetime-local':
      message += `${warningMessage().datetime()} \n`;
      break;
    case 'email':
      message += `${warningMessage().email()} \n`;
      break;
    case 'number':
      message += `${warningMessage().number()} \n`;
      break;
    case 'tel':
      message += `${warningMessage().phonenumber()} \n`;
      break;
    case 'time':
      message += `${warningMessage().time()} \n`;
      break;
    case 'url':
      message += `${warningMessage().url()} \n`;
      break;
    default:
      break;
  }

  if (required) {
    message += `${warningMessage().requiredField()} \n`;
  }
  if (
    (
      text
      || password
    )
    && min
    && min !== -1
  ) {
    message += `${warningMessage().minChar(min)} \n`;
  }
  if (
    (
      text
      || password
    )
    && max
    && max !== -1
  ) {
    message += `${warningMessage().maxChar(max)} \n`;
  }
  if (match) {
    message += `${warningMessage().exactly(match.toString())} \n`;
  }

  return message;
};

export {
  writeErrorMessage,
};
