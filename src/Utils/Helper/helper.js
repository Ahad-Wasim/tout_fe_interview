/* Default  (For component based helper functions)*/
import React from 'react';
import _ from 'lodash';

export const customDeepClone = (state, nestedProp, data) => {

  let clonedState = null;

  nestedProp.reduce((acc, prop, i, coll) => {
    clonedState = !clonedState ? acc : clonedState;
    if (i + 1 === coll.length) {
      return acc[prop] =  Object.assign({}, acc[prop], data);
    } else {
      return acc[prop] = Object.assign({}, acc[prop]);
    }

  }, Object.assign({}, state));

  return clonedState;
};

export const actionCreator = (type, payload) => {
  return { type, payload };
};

// Distinguish between regular values and default values
export const determineValue = (val, def) => {
  return _.isNil(val) ? def : val;
};

export const editButtonVisibility = (hours, minutes, seconds) => {

  const finished = '00';

  // Used nested if statments because it is easier to read versus putting
  // all these conditionals in one line
  if (_.isEqual(hours, finished)) {
    if (_.isEqual(minutes, finished)) {
      if (_.isEqual(seconds, finished)) {
        return false;
      }
    }
  }

  return true;
};

export const calculateTimerProperties = (difference, timerId) => {
  return {
    timerId: timerId,
    seconds: timerFormat(Math.floor((difference / 1000) % 60)),
    minutes: timerFormat(Math.floor(((difference / (1000 * 60)) % 60))),
    hours: timerFormat(Math.floor(((difference / (1000 * 60 * 60)) % 24))),
  };
};

// Converts number to a string
export const timerFormat = (num) => {
  if(num < 10){
      return '0' + num;
  }
  return '' + num;
}

export const updateTimerCLONE  = (timerList, currentTimer) => {
  return _.map(timerList, (timer) => {
    return timer.timerId === currentTimer.timerId ? currentTimer : timer;
  });
};
