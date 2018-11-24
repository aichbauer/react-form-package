import { baseComponents } from '../components';

const dateInputNoRules = {
  ...baseComponents,
  data: {
    date: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'date',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  dateInputNoRules,
};
