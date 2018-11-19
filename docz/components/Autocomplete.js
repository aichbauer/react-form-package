import React from 'react';
import Downshift from 'downshift';

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];

const Autocomplete = (props) => (
  <Downshift
    onChange={(item) => props.onChange(item.value)}
    itemToString={(item) => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => {
      console.log(getInputProps());
      return (
        <div>
          <label {...getLabelProps()}>Enter a fruit: </label>
          <input
            {...getInputProps()}
            onFocus={(e) => props.onFocus(e.target.value)}
            onBlur={(e) => props.onBlur(e.target.value)}
            placeholder="apple"
          />
          <ul {...getMenuProps()}>
            {isOpen
              ? items
                .filter((item) => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
              : null}
          </ul>
        </div>
      );
    }}
  </Downshift>
);

export { Autocomplete };
