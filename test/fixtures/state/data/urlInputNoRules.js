import { baseComponents } from '../components';

const urlInputNoRules = {
  ...baseComponents,
  data: {
    url: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'url',
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
  urlInputNoRules,
};
