/* Constants */
import {
  UPDATE_TOTAL_TIMERS,
  SET_MODAL_VISIBILITY,
  EDIT_TIMER_ID,
  EDIT_TIMER_CONFIGS,
  ADD_RUNNING_INTERVAL,
  REMOVE_RUNNING_INTERVAL
} from '../Constants/constants.js';

/* Utils */
import {
  actionCreator,
  updateTimerCLONE,
  calculateTimerProperties,
} from '../Utils/Helper/helper';

/* Libraries */
import _ from 'lodash';

export const modalVisibility = (bool) => {
  return actionCreator(SET_MODAL_VISIBILITY, bool);
};

export const editTimerId = (timerId) => {
  return actionCreator(EDIT_TIMER_ID, timerId);
};

export const editTimerConfigs = (formField, value) => {
  let payload = {};
  payload[formField] = value;
  return actionCreator(EDIT_TIMER_CONFIGS, payload);
};

export const addTimers = (num, timerModel) => {
  const totalTimers = _.range(num).map((val, i) => {
    return Object.assign({}, timerModel, { timerId: i });
  });

  return actionCreator(UPDATE_TOTAL_TIMERS, totalTimers);
};

export const startTimer = ({ timerId, hours, minutes, seconds }) => {
  return (dispatch, getState) => {

    // Current Values from ApplicationState
    const { totalTimers, runningIntervals } = getState().timerCollection;

    // Immediately update timer to user inputed values
    const timerProperties = {
      timerId: timerId,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    };

    // Clone and update the totalTimers array with new values
    const newTimerList = updateTimerCLONE(totalTimers, timerProperties);
    dispatch(actionCreator(UPDATE_TOTAL_TIMERS, newTimerList));

    // Wait 500 ms for the TimerModal to completely close.
    setTimeout(() => {

      const secondsMS = Math.floor(1000 * parseInt(seconds));
      const minutesMS = Math.floor((1000 * 60) * parseInt(minutes));
      const hoursMS = Math.floor((1000 * 60 * 60) * parseInt(hours));
      const totalMS = Date.now() + secondsMS + minutesMS + hoursMS;

      const timerInterval = setInterval(() => {

        // accessing updated State changes from other timers
        const { totalTimers } = getState().timerCollection;

        const now = Date.now();
        const difference = totalMS - now;

        // timer properties that encapsulates the total remaining time
        const timerProperties = calculateTimerProperties(difference, timerId);
        let newTimerList = updateTimerCLONE(totalTimers, timerProperties);

        // If the timer is finished
        if (difference <= 0) {
          const resetProperty = {
            timerId: timerId,
            seconds: '00',
            minutes: '00',
            hours: '00',
          };

          // reset totaltimers with default values
          let newTimerList = updateTimerCLONE(totalTimers, resetProperty);
          dispatch(actionCreator(UPDATE_TOTAL_TIMERS, newTimerList));
          clearInterval(timerInterval);
        } else {
          dispatch(actionCreator(UPDATE_TOTAL_TIMERS, newTimerList));
        }
      }, 250);

      const intervalReference = { timerId, intervalReference: timerInterval };
      const clonedRunningIntervals = runningIntervals.concat(intervalReference);
      dispatch(actionCreator(ADD_RUNNING_INTERVAL, clonedRunningIntervals));
    }, 100);

  };
};

export const resetModalConfigurations = () => {
  let payload = { hours: '00', minutes: '00', seconds: '00' };
  return actionCreator(EDIT_TIMER_CONFIGS, payload);
};

export const resetTimer = (timerId) => {

  return (dispatch, getState) => {

    const { runningIntervals, totalTimers } = getState().timerCollection;
    let foundInterval = runningIntervals.find(interval => interval.timerId === timerId);

    if (foundInterval) {
      clearInterval(foundInterval.intervalReference);

      const resetProperties = {
        timerId: timerId,
        seconds: '00',
        minutes: '00',
        hours: '00',
      };

      let newTimerList = updateTimerCLONE(totalTimers, resetProperties);
      const updatedRunningIntervals = runningIntervals.filter(interval => interval.timerId !== timerId);
      dispatch(actionCreator(UPDATE_TOTAL_TIMERS, newTimerList));
      dispatch(actionCreator(REMOVE_RUNNING_INTERVAL, updatedRunningIntervals));
    }
  };
};
