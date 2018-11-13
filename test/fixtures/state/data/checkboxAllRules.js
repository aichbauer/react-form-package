import { baseComponents } from '../components';

const checkboxAllRules = {
  ...baseComponents,
  data: {
    checkbox: {
      initialValue: false,
      checked: false,
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: false,
      valid: false,
      invalid: true,
      rules: {
        type: 'checkbox',
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
  checkboxAllRules,
};
