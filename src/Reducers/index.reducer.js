import { combineReducers } from 'redux';
import { settings } from './settings.reducer.js';

// constructs a new instance of the state
const ApplicationState = combineReducers({
  settings,
});

export { ApplicationState };
