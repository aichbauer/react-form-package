import { baseComponents } from '../components';

const telInputAllRules = {
  ...baseComponents,
  data: {
    tel: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'tel',
        required: true,
      },
    },
  },
  validate: false,
  formValid: false,
};

export {
  telInputAllRules,
};
