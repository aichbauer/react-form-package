import { baseComponents } from '../components';

const telInputNoRules = {
  ...baseComponents,
  data: {
    tel: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'tel',
        required: false,
      },
    },
  },
  validate: false,
  formValid: true,
};

export {
  telInputNoRules,
};
