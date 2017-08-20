import React from 'react';

const Button = (props) => {
  return (
    <button type={props.type} id={props.id} className={props.className}>
      {props.value}
    </button>
  );
};

export { Button };
