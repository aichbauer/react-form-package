import pkg from './package.json';

const libName = pkg.name;

export default {
  dest: './docs',
  files: './docz/**/*.mdx',
  ordering: 'ascending',
  base: `/${libName}/`,
  menu: [
    'Introduction',
    'Installation',
    'Form',
    'Simple Form',
    'Button',
    'Field',
    'FieldWrapper',
    'RadioGroup',
    'Select',
    'Form Validation',
    'State',
    'onFocus onChange onBlur',
    'State Manipulation',
    'Custom Error Messages',
    'Feedback on disabled Button',
    'Styling',
    'Dynamic Fields',
    'Dynamic Fields 2',
    'Dynamic Fields 3',
    'Bind Input Fields',
    'Bind Input Fields 2',
    'Third Party Components',
    'File Upload',
    'Why',
  ],
};
