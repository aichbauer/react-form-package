import { baseComponents } from '../components';

const numberInputAllRules = {
  ...baseComponents,
  data: {
    number: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'number',
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
};

export {
  numberInputAllRules,
};
