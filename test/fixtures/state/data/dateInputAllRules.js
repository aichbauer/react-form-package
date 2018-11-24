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
        max: '2018-12-10',
        min: '2018-10-10',
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
