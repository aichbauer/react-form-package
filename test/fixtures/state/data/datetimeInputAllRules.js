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
  datetimeInputAllRules,
};
