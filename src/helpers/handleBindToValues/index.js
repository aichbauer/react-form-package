import { checkFormInput } from '../checkFormInput';

const handleBindToValues = (newData, data, myValue, options) => {
  const thisBindTo = Array.isArray(options.bindTo)
    ? options.bindTo
    : [options.bindTo];

  let thisNewData = newData;

  thisBindTo.forEach((bindTo, idx) => {
    let newBoundValue = options.bindToCallback(myValue);
    newBoundValue = Array.isArray(newBoundValue)
      ? newBoundValue[idx]
      : newBoundValue;

    const boundValue = options.bindToAllways || !thisNewData[bindTo].touched
      ? newBoundValue
      : thisNewData[bindTo].value;
    const boundValid = checkFormInput(thisNewData[bindTo].rules, boundValue, data);
    const boundPristine = boundValue === thisNewData[bindTo].initialValue;

    thisNewData = {
      ...thisNewData,
      [bindTo]: {
        ...thisNewData[bindTo],
        value: boundValue,
        valid: boundValid,
        invalid: !boundValid,
        pristine: boundPristine,
        dirty: !boundPristine,
      },
    };
  });

  return thisNewData;
};

export { handleBindToValues };
