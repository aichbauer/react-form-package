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
