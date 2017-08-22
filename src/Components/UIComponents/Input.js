import React from 'react';

const Input = (props) => {
  return (
    <div>
    <label>{props.labelValue}:</label>
      <input
        onChange={props.onChange}
        onClick={props.onClick}
        maxLength={props.maxLength}
        pattern={props.pattern}
        name={props.name}
        type={props.type}
        id={props.id}
        className={props.className}
        value={props.value}
      />
    </div>
  );
};

export { Input };
