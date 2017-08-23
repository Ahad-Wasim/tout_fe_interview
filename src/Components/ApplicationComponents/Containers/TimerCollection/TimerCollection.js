/* Defaults */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Pure Components */
import { Timer } from '../../PureComponents/TimerCollectionBoard/Timer';
import { TimerModal } from '../../PureComponents/TimerCollectionBoard/TimerModal';

/* Helper */
import {
  determineValue,
  editButtonVisibility,
  validateTimerValues,
  validateBeforeStartingTimer
} from '../../../../Utils/Helper/helper';

/* Actions */
import {
  modalVisibility,
  editTimerId,
  editTimerConfigs,
  resetModalConfigurations,
  startTimer,
  resetTimer
} from '../../../../Actions/timerCollections.actions';

class TimerCollection extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.handleChange.bind(this);
    this.onClick = this.handleClick.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
    this.onCloseModal = this.handleCloseModal.bind(this);
    window.startTimer = this.props.actions.startTimer.bind(this);
    window.resetTimer = this.props.actions.resetTimer.bind(this);
  };

  handleChange(event) {
    const { name, value } = event.target;
    if (name === 'hours' || name === 'minutes' || name === 'seconds') {
      const errorFree = validateTimerValues(value);
      errorFree ? this.props.actions.editTimerConfigs(name, value) : null;
    }
  }

  handleClick(event, timerId) {
    const { name, value } = event.target;
    if(name === 'Reset') {
      this.props.actions.resetTimer(timerId);
    }

    if (name === 'Edit') {
      this.props.actions.editTimerId(timerId);
      this.props.actions.modalVisibility(true);
    }
  }

  handleCloseModal(event) {
    this.props.actions.modalVisibility(false);
  }

  handleSubmit(event) {
    const { currentTimerConfig } = this.props.timerCollection;
    const errorFree = validateBeforeStartingTimer(currentTimerConfig);
    if (errorFree) {
      this.props.actions.startTimer(currentTimerConfig);
      this.props.actions.resetModalConfigurations();
      this.handleCloseModal();
    }
  }

  // avoid writing logic inside the render statement. Attach to method instead!
  renderTotalTimers() {
    const { totalTimers, modalVisibility, currentTimerConfig } = this.props.timerCollection;
    const { timerCount } = this.props.settings;
    const { seconds, minutes, hours } = this.props.settings.timerDefault;

    return totalTimers.map( timerModel => {
      const { hours, minutes, seconds } = timerModel;
      const disabled = editButtonVisibility(hours, minutes, seconds);

      return (
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onClick={this.onClick}
          timerId={timerModel.timerId}
          key={timerModel.timerId}
          disabled={disabled}
        />
      );
    });

  }

  render() {

    return (
      <div className="timerCollection-wrapper">

        { this.renderTotalTimers() }

        <TimerModal
          isOpen={this.props.timerCollection.modalVisibility}
          onCloseModal={this.onCloseModal}
          timer={{
            timerId: this.props.timerCollection.currentTimerConfig.timerId,
            hours: this.props.timerCollection.currentTimerConfig.hours,
            minutes: this.props.timerCollection.currentTimerConfig.minutes,
            seconds: this.props.timerCollection.currentTimerConfig.seconds,
          }}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />

      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    settings: state.settings,
    timerCollection: state.timerCollection,
  };
};

const mapDispatchToProps = dispatch => {
  const customActions = {
    modalVisibility,
    editTimerId,
    editTimerConfigs,
    resetModalConfigurations,
    resetTimer,
    startTimer,
  };
  return {
    actions: bindActionCreators(customActions, dispatch),
  };
};

const containerComponent = connect(mapStateToProps, mapDispatchToProps)(TimerCollection);

export { containerComponent as TimerCollection };
