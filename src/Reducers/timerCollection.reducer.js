/* Constants */
import {
  EDIT_TIMER_ID,
  EDIT_TIMER_CONFIGS,
  UPDATE_TOTAL_TIMERS,
  SET_MODAL_VISIBILITY,
  ADD_RUNNING_INTERVAL,
  REMOVE_RUNNING_INTERVAL
} from '../Constants/constants';

/* Model */
import { timerCollectionModel } from './InitialModels/timerCollection.model.js';

/* Utils */
import { customDeepClone } from '../Utils/Helper/helper';

// Returns a new Model
const timerCollection = (state=timerCollectionModel, { type, payload }) => {
  switch (type) {
    case ADD_RUNNING_INTERVAL:
      return Object.assign({}, state, { runningIntervals: payload });
    case REMOVE_RUNNING_INTERVAL:
      return Object.assign({}, state, { runningIntervals: payload });
    case UPDATE_TOTAL_TIMERS:
      return Object.assign({}, state, { totalTimers: payload });
    case EDIT_TIMER_ID:
      return customDeepClone(state, ['currentTimerConfig'], { timerId: payload });
    case EDIT_TIMER_CONFIGS:
      return customDeepClone(state, ['currentTimerConfig'], payload);
    case SET_MODAL_VISIBILITY:
      return Object.assign({}, state, { modalVisibility: payload });
    default:
      return state;
  };
};

export { timerCollection };
