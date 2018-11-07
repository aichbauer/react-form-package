const isDataValid = (data, props) => {
  if (Object.keys(data).length === 0 && data.constructor === Object) {
    return false;
  }

  if (!data[props.id]) {
    return false;
  }

  return true;
};

export { isDataValid };
