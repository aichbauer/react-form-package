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
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
  validateOnClick: false,
  buttonClicked: false,
};

export {
  checkboxAllRules,
};
