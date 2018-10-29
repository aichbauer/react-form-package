const createReturnState = (state) => {
  let values = {};
  Object.entries(state.data).forEach((entry) => {
    values = {
      ...values,
      [entry[0]]: entry[1].rules.type === 'file'
        ? entry[1].files
        : entry[1].value,
    };
  });

  return {
    data: values,
    meta: state.data,
    formValid: state.formValid,
  };
};

export { createReturnState };
