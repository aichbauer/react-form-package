import warningMessage from 'warning-message';

const writeErrorMessage = (rules) => {
  const {
    type,
    required,
    max,
    min,
  } = rules;
  let message = '';

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
  if (min && min !== -1) {
    message += `${warningMessage().minChar(min)} \n`;
  }
  if (max && max !== -1) {
    message += `${warningMessage().maxChar(max)} \n`;
  }

  return message;
};

export {
  writeErrorMessage,
};
