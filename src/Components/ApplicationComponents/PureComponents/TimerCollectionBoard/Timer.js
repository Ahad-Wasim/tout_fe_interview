/* Defaults */
import React from 'react';

/* Components */
import { Button } from '../../../UIComponents/Button';


const Timer = (props) => {
  return (
    <div className="timer">
      <p>
        <span>{props.hours}</span>:
        <span>{props.minutes}</span>:
        <span>{props.seconds}</span>
      </p>

      <div className='timer-options'>
        <Button
          type='button'
          name='Edit'
          value='Edit'
          onClick={(e) => props.onClick(e, props.timerId)}
          visibility={!props.startButtonVisibility}
        />

        <Button type='button' value='Stop' />
        <Button type='reset' value='Reset' />
      </div>

    </div>
  );
};

export { Timer };
