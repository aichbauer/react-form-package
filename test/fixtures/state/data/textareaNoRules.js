import { baseComponents } from '../components';

const textareaNoRules = {
  ...baseComponents,
  data: {
    textarea: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'textarea',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
  validateOnClick: false,
  buttonClicked: false,
};

export {
  textareaNoRules,
};
