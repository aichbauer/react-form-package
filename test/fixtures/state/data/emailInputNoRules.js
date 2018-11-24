import { baseComponents } from '../components';

const emailInputNoRules = {
  ...baseComponents,
  data: {
    email: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'email',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  emailInputNoRules,
};
