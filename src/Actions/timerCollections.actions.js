/* Constants */
import {
  UPDATE_TOTAL_TIMERS,
  SET_TIMER_COUNT,
  SET_MODAL_VISIBILITY,
  EDIT_TIMER_ID,
  EDIT_TIMER_CONFIGS,
} from '../Constants/constants.js';

/* Utils */
import { actionCreator } from '../Utils/Helper/helper';

/* Libraries */
import _ from 'lodash';

export const updateTimerCount = (value) => {
  return actionCreator(SET_TIMER_COUNT, value);
};

export const createNewTimer = (defaults, runningTimers) => {
}

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

    const secondsMS = Math.floor(1000 * seconds);
    const minutesMS = Math.floor((1000 * 60) * minutes);
    const hoursMS = Math.floor((1000 * 60 * 60) * hours);
    const totalMS = now + secondsMS + minutesMS + hoursMS;

    const timerInterval = setInterval(() => {

      let now = Date.now();

      let difference = totalMS - now;

      let totalSeconds = Math.floor((difference / 1000) % 60);
      let totalMinutes = Math.floor(((difference / (1000*60)) % 60));
      let totalHours = Math.floor(((difference / (1000*60*60)) % 24));


      addTimers()
      if(difference < 0){
        clearInterval(timerInterval);
      }
    }, 1000);

  };
};
