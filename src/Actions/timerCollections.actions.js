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
  isTimerRunning
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


// creates n timerModels in the redux store
export const addTimers = (num, timerModel) => {
  const totalTimers = _.range(num).map((val, i) => {
    return Object.assign({}, timerModel, { timerId: i+1 });
  });

  return actionCreator(UPDATE_TOTAL_TIMERS, totalTimers);
};

// Start a specific timer
export const startTimer = ({ timerId, hours, minutes, seconds }) => {
  return (dispatch, getState) => {

    // Current Values from ApplicationState
    const { totalTimers, runningIntervals } = getState().timerCollection;

    // Check to see if timer was not running previously
    if (!isTimerRunning(timerId, runningIntervals)) {

      // Immediately update timer to user inputed values
      const timerProperties = {
        timerId: timerId,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
      };

      // Clone and update the totalTimers list with the new inputed values
      const newTimerList = updateTimerCLONE(totalTimers, timerProperties);
      dispatch(actionCreator(UPDATE_TOTAL_TIMERS, newTimerList));

      // Wait 500 ms so that the TimerModal can completely close.
      setTimeout(() => {

        // Calculate total number of milleconds with the new inputted values
        const secondsMS = Math.floor(1000 * parseInt(seconds));
        const minutesMS = Math.floor((1000 * 60) * parseInt(minutes));
        const hoursMS = Math.floor((1000 * 60 * 60) * parseInt(hours));
        const totalMS = Date.now() + secondsMS + minutesMS + hoursMS;

        // Start an interval to keep decreasing the timer
        const timerInterval = setInterval(() => {

          // referencing the latest Application state changes
          const { totalTimers } = getState().timerCollection;

          const now = Date.now();
          const difference = totalMS - now;

          // calculates hours + minutes + seconds before hitting target time
          const timerProperties = calculateTimerProperties(difference, timerId);
          let newTimerList = updateTimerCLONE(totalTimers, timerProperties);

          // If the timer has surpassed the target
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

            // stop the interval
            clearInterval(timerInterval);
          } else {

            // else dispatch the updated Time left
            dispatch(actionCreator(UPDATE_TOTAL_TIMERS, newTimerList));
          }
        }, 250);

        const intervalReference = { timerId, intervalReference: timerInterval };
        const clonedRunningIntervals = runningIntervals.concat(intervalReference);
        dispatch(actionCreator(ADD_RUNNING_INTERVAL, clonedRunningIntervals));
      }, 100);
    } //Closes runningTimerConditional
  }; // Closes Thunk Function
}; // Closes startTimer


// Reset the Modal Configurations
export const resetModalConfigurations = () => {
  let payload = { hours: '00', minutes: '00', seconds: '00' };
  return actionCreator(EDIT_TIMER_CONFIGS, payload);
};

// Reset a specific timer
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
