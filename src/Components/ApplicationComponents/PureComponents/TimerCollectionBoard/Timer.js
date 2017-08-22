/* Defaults */
import React from 'react';

/* Components */
import { Button } from '../../../UIComponents/Button';


const Timer = (props) => {
  return (
    <div className="container">
      <div className="timer">
        <p className="text-center">
          <span>{props.hours}</span>:
          <span>{props.minutes}</span>:
          <span>{props.seconds}</span>
        </p>

        <div className='timer-options'>
          <Button
            className="timer-button"
            type='button'
            name='Edit'
            value='Edit'
            onClick={(e) => props.onClick(e, props.timerId)}
            disabled={props.disabled}
          />

          <Button
            className="timer-button"
            type='button'
            name="Reset"
            value='Reset'
            onClick={(e) => props.onClick(e, props.timerId)}
          />
        </div>
      </div>
    </div>
  );
};

export { Timer };
