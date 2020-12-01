import { baseComponents } from '../components';

const selectInputAllRules = {
  ...baseComponents,
  data: {
    select: {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: false,
      invalid: true,
      rules: {
        type: 'select',
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
  selectInputAllRules,
};
