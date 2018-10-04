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
        min: '2',
        max: '4',
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
