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

export const startButtonVisibility = (hours, minutes, seconds) => {

  const finished = '00';

  // Used nested if statments because it is easier to read versus putting
  // all these conditionals on one line
  if(_.isEqual(hours, finished)) {
    if(_.isEqual(minutes, finished)) {
      if(_.isEqual(seconds, finished)) {
        return false;
      }
    }
  }

  return true;
};
