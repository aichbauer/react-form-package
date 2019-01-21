import React from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import {
  checkFormInput,
  createReturnState,
  getNestedChilds,
  initialState,
} from '../../helpers';

class Form extends React.Component {
  constructor(props) {
    super(props);

    const {
      validate,
      input,
      checkbox,
      textarea,
      radio,
      radioContainer,
      button,
      select,
      error,
    } = this.props;

    this.state = {
      InputComponent: input,
      ButtonComponent: button,
      SelectComponent: select,
      CheckboxComponent: checkbox,
      RadioGroupComponent: radio,
      RadioGroupContainerComponent: radioContainer,
      TextareaComponent: textarea,
      ErrorLabelComponent: error,
      data: {},
      validate,
      formValid: false,
    };

    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.updateState = this.updateState.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  handleOnFocus(e, cb) {
    const {
      id,
      type,
      name,
    } = e.target;
    const { data } = this.state;
    const myId = type === 'radio' ? name : id;

    this.setState({
      data: {
        ...data,
        [myId]: {
          ...data[myId],
          visited: true,
        },
      },
    }, () => this.validateForm(cb));
  }

  handleOnChange(e, rules, options, cb) {
    const {
      id,
      value,
      checked,
      type,
      name,
      files,
    } = e.target;
    const { data } = this.state;
    const checkbox = type === 'checkbox';
    const file = type === 'file';
    const radio = type === 'radio';
    const myId = radio
      ? name
      : id;
    let myValue = radio
      ? id
      : value;
    myValue = checkbox
      ? checked
      : myValue;
    let myFiles = files;
    if (!files) {
      myValue = options.preOnChange
        ? options.preOnChange(myValue)
        : myValue;
    } else {
      myFiles = options.preOnChange
        ? options.preOnChange(files)
        : files;
    }
    const valid = checkFormInput(rules, myValue, data);

    let newData = {
      ...data,
      [myId]: {
        ...data[myId],
        value: myValue,
        files: file ? myFiles : undefined,
        checked,
        valid,
        invalid: !valid,
        pristine: value === data[myId].initialValue,
        dirty: value !== data[myId].initialValue,
      },
    };

    if (options.dynamic && myValue) {
      newData = {
        ...newData,
        [options.field.id]: {
          ...initialState(options.field, data),
        },
      };
    }
    if (options.bindTo && myValue) {
      const boundValue = !newData[options.bindTo].touched
        ? options.bindToCallback(myValue)
        : newData[options.bindTo].value;
      const boundValid = checkFormInput(newData[options.bindTo].rules, boundValue, data);
      const boundPristine = boundValue === newData[options.bindTo].initialValue;

      newData = {
        ...newData,
        [options.bindTo]: {
          ...newData[options.bindTo],
          value: boundValue,
          valid: boundValid,
          invalid: !boundValid,
          pristine: boundPristine,
          dirty: !boundPristine,
        },
      };
    }
    if (rules.sameAs) {
      newData = {
        ...newData,
        [rules.sameAs]: {
          ...newData[rules.sameAs],
          valid,
          invalid: !valid,
        },
      };
    }

    this.setState({
      data: {
        ...newData,
      },
    }, () => this.validateForm(cb));
  }

  handleOnBlur(e, cb) {
    const {
      id,
      type,
      name,
    } = e.target;
    const { data } = this.state;
    const myId = type === 'radio' ? name : id;

    this.setState({
      data: {
        ...data,
        [myId]: {
          ...data[myId],
          touched: true,
        },
      },
    }, () => this.validateForm(cb));
  }

  setInitialState(children) {
    let data = {};
    children.forEach((child) => {
      data = {
        ...data,
        [child.props.id]: {
          ...initialState(child.props, data),
        },
      };
    });

    this.setState({
      data,
    }, () => this.validateForm());
  }

  addField(fields) {
    const { data } = this.state;

    let fieldsArr;
    let newFields = {};

    if (!Array.isArray(fields)) {
      fieldsArr = [fields];
    } else {
      fieldsArr = fields;
    }

    fieldsArr.forEach((field) => {
      newFields = {
        ...newFields,
        [field.id]: {
          ...initialState(field, data),
        },
      };
    });

    this.setState({
      data: {
        ...data,
        ...newFields,
      },
    }, () => this.validateForm());
  }

  removeField(fieldIds) {
    const { data } = this.state;

    let fieldIdsArr;
    let newFields = {};

    if (!Array.isArray(fieldIds)) {
      fieldIdsArr = [fieldIds];
    } else {
      fieldIdsArr = fieldIds;
    }

    Object.keys((data)).forEach((d) => {
      if (!fieldIdsArr.includes(d)) {
        newFields = {
          ...newFields,
          [d]: data[d],
        };
      }
    });

    this.setState({
      data: newFields,
    }, () => this.validateForm());
  }

  updateState() {
    const { children } = this.props;
    const flatChilds = getNestedChilds(children, []);

    this.setInitialState(flatChilds);
  }

  validateForm(cb) {
    const { data } = this.state;
    const allFieldValidations = [];
    let newData = {
      ...data,
    };

    Object.keys(data).forEach((key) => {
      let oneValid = false;

      if (data[key].rules.sameAs) {
        oneValid = checkFormInput(data[key].rules, data[key].value, data);
        newData = {
          ...newData,
          [key]: {
            ...data[key],
            valid: oneValid,
            invalid: !oneValid,
          },
        };
      } else {
        oneValid = data[key].valid;
      }

      allFieldValidations.push(oneValid);
    });

    const allFieldsValid = allFieldValidations.every((val) => val);

    this.setState({
      data: newData,
      formValid: allFieldsValid,
    }, () => {
      const { state } = this;

      if (cb) {
        cb(createReturnState(state));
      }
    });
  }

  render() {
    const {
      InputComponent,
      ButtonComponent,
      SelectComponent,
      CheckboxComponent,
      RadioGroupComponent,
      RadioGroupContainerComponent,
      TextareaComponent,
      ErrorLabelComponent,
      data,
      validate,
      formValid,
    } = this.state;
    const {
      children,
      enctype,
    } = this.props;

    return (
      <Context.Provider value={{
        InputComponent,
        ButtonComponent,
        SelectComponent,
        CheckboxComponent,
        RadioGroupComponent,
        RadioGroupContainerComponent,
        TextareaComponent,
        ErrorLabelComponent,
        data,
        validate,
        formValid,
        handleOnFocus: this.handleOnFocus,
        handleOnChange: this.handleOnChange,
        handleOnBlur: this.handleOnBlur,
        addField: this.addField,
        removeField: this.removeField,
      }}
      >
        <form
          enctype={enctype} // eslint-disable-line
        >
          {children}
        </form>
      </Context.Provider>
    );
  }
}

Form.defaultProps = {
  validate: false,
  input: <input className="rfp-input" />,
  checkbox: <input className="rfp-checkbox" />,
  radio: <input className="rfp-radio-group" />,
  radioContainer: <div className="rfp-radio-group-container" />,
  button: <button className="rfp-button" />, // eslint-disable-line
  select: <select className="rfp-select" />,
  textarea: <textarea className="rfp-textarea" />,
  error: <div className="rfp-error-label" />,
  enctype: 'application/x-www-form-urlencoded',
};

Form.propTypes = {
  validate: PropTypes.bool,
  input: PropTypes.element,
  checkbox: PropTypes.element,
  radio: PropTypes.element,
  radioContainer: PropTypes.element,
  button: PropTypes.element,
  select: PropTypes.element,
  textarea: PropTypes.element,
  error: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  enctype: PropTypes.string,
};

export { Form };
