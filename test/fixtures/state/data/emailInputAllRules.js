import { baseComponents } from '../components';

const emailInputAllRules = {
  ...baseComponents,
  data: {
    email: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'email',
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
  validateOnClick: false,
  buttonClicked: false,
};

export {
  emailInputAllRules,
};
