import { baseComponents } from '../components';

const radioGroupAllRules = {
  ...baseComponents,
  data: {
    radio: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'radio',
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
  radioGroupAllRules,
};
