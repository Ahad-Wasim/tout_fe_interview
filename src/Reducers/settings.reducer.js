import { settingModel } from './InitialModels/settings.model.js';
import { SET_TIMER_COUNT } from '../Constants/constants';
import { customDeepClone } from '../Utils/Helper/helper';

// Returns a new Model
const settings = (state=settingModel, action) => {
  switch (action.type) {
    case SET_TIMER_COUNT:
      return Object.assign({}, state, { timerCount: action.payload });
    default:
      return state;
  };
};

export { settings };
