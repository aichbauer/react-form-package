import { baseComponents } from '../components';

const passwordInputNoRules = {
  ...baseComponents,
  data: {
    password: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'password',
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
  passwordInputNoRules,
};
