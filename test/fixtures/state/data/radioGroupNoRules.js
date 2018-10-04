import { baseComponents } from '../components';

const radioGroupNoRules = {
  ...baseComponents,
  data: {
    radio: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'radio',
        min: -1,
        max: -1,
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  radioGroupNoRules,
};
