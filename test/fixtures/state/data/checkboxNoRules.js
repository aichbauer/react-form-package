import { baseComponents } from '../components';

const checkboxNoRules = {
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
      valid: true,
      invalid: false,
      rules: {
        type: 'checkbox',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
  validateOnClick: false,
  buttonClicked: false,
};

export {
  checkboxNoRules,
};
