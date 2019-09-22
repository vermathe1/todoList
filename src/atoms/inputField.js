import React from 'react';

const InputField = props => {
  // const defaultValue = props.defaultValue || '';
  const {
    onKeyPress,
    name,
    type,
    placeholder,
    id,
    onChange,
    defaultValue,
    onBlur
  } = props;
  return (
    <input
      autoFocus
      defaultValue={defaultValue}
      type={type}
      name={name}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      id={id}
      onBlur={onBlur}
    ></input>
  );
};

InputField.defaultProps = {
  defaultValue: '',
  id: '',
  onBlur: () => {}
};

export default InputField;
