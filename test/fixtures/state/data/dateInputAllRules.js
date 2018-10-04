import { baseComponents } from '../components';

const dateInputAllRules = {
  ...baseComponents,
  data: {
    date: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'date',
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
  dateInputAllRules,
};
