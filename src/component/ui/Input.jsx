import React from "react";

const Input = ({
  type,
  className,
  placeholder,
  onChange,
  value,
  onFocus,
  onBlur,
  
}) => {
  return (
    <input
   
      onFocus={onFocus}
      onBlur={onBlur}
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
