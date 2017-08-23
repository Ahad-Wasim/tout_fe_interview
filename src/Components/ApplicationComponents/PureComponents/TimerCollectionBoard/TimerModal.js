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
      style={{
        /* React Modal advises inline styles */
        overlay: {
          backgroundColor:  'rgba(31, 29, 29, 0.75)',
        },
      }}
    >
      <Header
        headerType='H2'
        value={`Settings for Timer: ${props.timer.timerId}`}
        className="text-center modal-header"
      />

      <div className='input-wrapper form-horizontal'>
        <Input
          labelValue='Hours'
          name="hours"
          maxLength="2"
          value={props.timer.hours}
          onChange={props.onChange}
          wrapperClassName='modal-field form-group'
          className='form-control'
        />

        <Input
          labelValue='Minutes'
          name="minutes"
          maxLength="2"
          value={props.timer.minutes}
          onChange={props.onChange}
          wrapperClassName='modal-field form-group'
          className='form-control'
        />

        <Input
          labelValue='Seconds'
          name="seconds"
          maxLength="2"
          value={props.timer.seconds}
          onChange={props.onChange}
          wrapperClassName='modal-field form-group'
          className='form-control'
        />
      </div>

      <div className='modal-buttonWrapper'>
        <div className='modal-buttonContainer'>
          <Button
            type='button'
            name='Submit'
            timerId={props.timer.timerId}
            value='Start Timer'
            onClick={props.onSubmit}
            className= 'btn btn-primary submit-button'
          />

          <Button
            type='button'
            name='Close'
            value='Close'
            onClick={(e) => props.onCloseModal(e, props.timer.timerId)}
            className='btn btn-default close-button'
          />
        </div>
      </div>

    </Modal>
  );
};

export { TimerModal };
