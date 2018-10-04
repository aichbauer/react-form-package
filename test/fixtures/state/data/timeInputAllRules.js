import { baseComponents } from '../components';

const timeInputAllRules = {
  ...baseComponents,
  data: {
    time: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'time',
        min: -1,
        max: -1,
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
};

export {
  timeInputAllRules,
};
