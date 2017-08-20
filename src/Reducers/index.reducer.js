import { combineReducers } from 'redux';
import { settings } from './settings.reducer.js';
import { content } from './content.reducer.js';

// constructs a new instance of the state
const ApplicationState = combineReducers({
  settings,
  content,
});

export { ApplicationState };
