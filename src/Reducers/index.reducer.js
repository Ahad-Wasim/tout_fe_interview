import { combineReducers } from 'redux';
import { settings } from './settings.reducer';
import { content } from './content.reducer';
import { timerCollection } from './timerCollection.reducer';

// constructs a new instance of the state
const ApplicationState = combineReducers({
  settings,
  content,
  timerCollection,
});

export { ApplicationState };
