import React from 'react';

const baseComponents = {
  FormComponent: <form className="rfp-form" />, // eslint-disable-line
  ButtonComponent: <button className="rfp-button" />, // eslint-disable-line
  CheckboxComponent: <input className="rfp-checkbox" />,
  InputComponent: <input className="rfp-input" />,
  RadioGroupComponent: <input className="rfp-radio-group" />,
  RadioGroupContainerComponent: <div className="rfp-radio-group-container" />,
  SelectComponent: <select className="rfp-select" />,
  TextareaComponent: <textarea className="rfp-textarea" />,
  ErrorLabelComponent: <div className="rfp-error-label" />,
};

export {
  baseComponents,
};
