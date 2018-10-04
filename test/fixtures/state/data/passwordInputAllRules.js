import { baseComponents } from '../components';

const passwordInputAllRules = {
  ...baseComponents,
  data: {
    password: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'password',
        min: '8',
        max: '15',
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
};

export {
  passwordInputAllRules,
};
