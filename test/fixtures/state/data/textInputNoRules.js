import { baseComponents } from '../components';

const textInputNoRules = {
  ...baseComponents,
  data: {
    text: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'text',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  textInputNoRules,
};
