import { baseComponents } from '../components';

const datetimeInputAllRules = {
  ...baseComponents,
  data: {
    'datetime-local': {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      invalid: true,
      valid: false,
      rules: {
        type: 'datetime-local',
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
  datetimeInputAllRules,
};
