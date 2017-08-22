import React from 'react';

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      onClick={props.onClick}
      name={props.name}
      type={props.type}
      id={props.id}
      className={props.className}
      value={props.value}
    />
  );
};

export { Input };
