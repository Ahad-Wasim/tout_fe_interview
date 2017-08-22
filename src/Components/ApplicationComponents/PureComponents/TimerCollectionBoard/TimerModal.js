/* Defaults */
import React from 'react';


/* Utils */
import { Input } from '../../../UIComponents/Input';
import { Button } from '../../../UIComponents/Button';
import { Header } from '../../../UIComponents/Header';

/* Plugins */
import Modal from 'react-modal';

const TimerModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onCloseModal}
      contentLabel='Modal'
    >
      <Header
        headerType='H2'
        value={`Settings for Timer: ${props.timer.timerId}`}
      />
      <Input
        name="hours"
        maxlength="2"
        value={props.timer.hours}
        onChange={props.onChange}
      />

      <Input
        name="minutes"
        maxlength="2"
        value={props.timer.minutes}
        onChange={props.onChange}
      />

      <Input
        name="seconds"
        maxlength="2"
        value={props.timer.seconds}
        onChange={props.onChange}
      />

      <Button
        type='button'
        name='Submit'
        timerId={props.timer.timerId}
        value='Start Timer'
        onClick={props.onSubmit}
      />

      <Button
        type='button'
        name='Close'
        value='Close'
        onClick={(e) => props.onCloseModal(e, props.timer.timerId)}
      />

    </Modal>
  );
};

export { TimerModal };
