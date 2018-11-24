import { baseComponents } from '../components';

const timeInputNoRules = {
  ...baseComponents,
  data: {
    time: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'time',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  timeInputNoRules,
};
