import { settingModel } from './Initial-Models/settings.reducer.model.js';
import { SET_TOTAL_TIMERS } from './Constants/settings.reducer.constants.js';
import { customDeepClone } from './Utils/Helper/helper.js';

// Returns a new Model
const settings = (state=settingModel, action) => {
  switch (action.type) {
    case SET_TOTAL_TIMERS:
      return customDeepClone(state, ['settings', 'default'], { totalTimers: action.payload });
    default:
      return state;
  };
};

export { settings };
