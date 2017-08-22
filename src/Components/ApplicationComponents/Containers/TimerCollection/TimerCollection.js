/* Defaults */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Pure Components */
import { Timer } from '../../PureComponents/TimerCollectionBoard/Timer';
import { AddTimerButton } from '../../PureComponents/TimerCollectionBoard/AddTimerButton';
import { TimerModal } from '../../PureComponents/TimerCollectionBoard/TimerModal';

/* Helper */
import { determineValue, startButtonVisibility } from '../../../../Utils/Helper/helper';

/* Actions */
import {
  modalVisibility,
  editTimerId,
  editTimerConfigs,
  startTimer
} from '../../../../Actions/timerCollections.actions';

class TimerCollection extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.handleChange.bind(this);
    this.onClick = this.handleClick.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
    this.onCloseModal = this.handleCloseModal.bind(this);
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.props.actions.editTimerConfigs(name, value);
  }

  handleClick(event, timerId) {
    const { name, value } = event.target;

    if(name === 'Start') {
      this.props.actions.startTimer();
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
    const { currentTimerConfig } = this.props.timerCollectionModel;
    this.props.actions.startTimer(currentTimerConfig);

    // this.props.actions.resetModalConfigurations();
    this.handleCloseModal();
  }

  // avoid writing logic inside the render statement. Attach to method instead!
  renderTotalTimers() {
    const { totalTimers, modalVisibility, currentTimerConfig } = this.props.timerCollection;
    const { timerCount } = this.props.settings;
    const { seconds, minutes, hours } = this.props.settings.timerDefault;

    return totalTimers.map( timerModel => {
      const { hours, minutes, seconds } = currentTimerConfig;
      const isStartVisible = startButtonVisibility(hours, minutes, seconds);

      return (
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onClick={this.onClick}
          timerId={timerModel.timerId}
          key={timerModel.timerId}
          startButtonVisibility={isStartVisible}
        />
      );
    });

  }

  render() {

    return (
      <div className="timerCollection-wrapper">

        { this.renderTotalTimers() }

        <AddTimerButton
          onClick={this.onClick}
          value={'+'}
        />

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
    startTimer,
  };
  return {
    actions: bindActionCreators(customActions, dispatch),
  };
};

const containerComponent = connect(mapStateToProps, mapDispatchToProps)(TimerCollection);

export { containerComponent as TimerCollection };
