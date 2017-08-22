import React from 'react';

const Button = ({ visibility=true, onClick, name, type, id, className, value }) => {

  if (visibility) {
    return (
      <button onClick={onClick} name={name} type={type} id={id} className={className} >
        {value}
      </button>
    );
  }

  return null;
};

export { Button };
