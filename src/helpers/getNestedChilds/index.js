const getNestedChilds = (children, data) => {
  const flatChilds = data;
  let arr = Array.isArray(children)
    && typeof children === 'object'
    ? children
    : [children];
  arr = typeof children === 'object'
    ? arr
    : [];

  arr.forEach((child) => { // eslint-disable-line
    const { type } = child;
    if (typeof type === 'function') {
      if (
        type.displayName === 'Field'
        || type.displayName === 'FieldWrapper'
        || type.displayName === 'Select'
        || type.displayName === 'RadioGroup'
      ) {
        flatChilds.push(child);
      }
    }
    if (Array.isArray(child)) {
      return child.forEach((c) => getNestedChilds(c, flatChilds));
    }
    if (typeof child !== 'object') {
      return flatChilds;
    }
    if (child.props.children) {
      return getNestedChilds(child.props.children, flatChilds);
    }
  });

  return flatChilds;
};

export {
  getNestedChilds,
};
