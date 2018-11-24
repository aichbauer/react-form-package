import { baseComponents } from '../components';

const textareaAllRules = {
  ...baseComponents,
  data: {
    textarea: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'textarea',
        min: 30,
        max: 40,
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
};

export {
  textareaAllRules,
};
