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

// customDeepClone(state, ['settings', 'default'], { totalTimers: action.payload });

export const actionCreator = (type, payload) => {
  return { type, payload };
};

export const determineDefaultOutput = (obj, prop) => {
  return _.isNil(obj[prop]) ? obj.default[prop] : obj[prop];
};
