import React from 'react';

const Button = ({ visibility=true, onClick, name, type, id, className, value, disabled }) => {

  if (visibility) {
    return (
      <button onClick={onClick} name={name} type={type} id={id} className={className} disabled={disabled}>
        {value}
      </button>
    );
  }

  return null;
};

export { Button };
