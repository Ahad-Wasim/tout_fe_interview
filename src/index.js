/* Defaults */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* Components */
import { Application } from './Components/ApplicationComponents/Application';

/* Reducers */
import { ApplicationState } from './Reducers/index.reducer';

/* Libraries */
import _ from 'lodash';

const DEVELOPMENT_MODE = (
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  ApplicationState,
  DEVELOPMENT_MODE
);

const Layout = (
  <Provider store={store}>
    <Application />
  </Provider>
);

render(Layout, document.getElementById('app'));
