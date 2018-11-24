import { baseComponents } from '../components';

const numberInputNoRules = {
  ...baseComponents,
  data: {
    number: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'number',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  numberInputNoRules,
};
