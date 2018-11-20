import { baseComponents } from '../components';

const textInputAllRules = {
  ...baseComponents,
  data: {
    text: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        match: /react/,
        type: 'text',
        min: '3',
        max: '8',
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
};

export {
  textInputAllRules,
};
