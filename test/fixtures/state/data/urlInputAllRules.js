import { baseComponents } from '../components';

const urlInputAllRules = {
  ...baseComponents,
  data: {
    url: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'url',
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
};

export {
  urlInputAllRules,
};
