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
        min: -1,
        max: -1,
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  passwordInputNoRules,
};
