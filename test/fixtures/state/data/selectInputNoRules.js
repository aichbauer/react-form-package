import { baseComponents } from '../components';

const selectInputNoRules = {
  ...baseComponents,
  data: {
    select: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'select',
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
  selectInputNoRules,
};
