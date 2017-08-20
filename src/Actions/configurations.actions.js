import { SET_TIMER_COUNT } from '../Constants/constants.js'
import { actionCreator } from '../Utils/Helper/helper';

export const updateTimerCount = (value) => {
  return actionCreator(SET_TIMER_COUNT, value);
};
