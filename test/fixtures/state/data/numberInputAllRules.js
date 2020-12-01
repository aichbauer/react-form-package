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
        max: 4,
        min: 2,
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
  numberInputAllRules,
};
