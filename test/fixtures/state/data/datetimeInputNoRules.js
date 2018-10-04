import { baseComponents } from '../components';

const datetimeInputNoRules = {
  ...baseComponents,
  data: {
    'datetime-local': {
      initialValue: '',
      dirty: false,
      pristine: true,
      visited: false,
      touched: false,
      value: '',
      valid: true,
      invalid: false,
      rules: {
        type: 'datetime-local',
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
  datetimeInputNoRules,
};
