/* Defaults */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* Reducers */
import { ApplicationState } from './Reducers/index.reducer';

/* Libraries */
import _ from 'lodash';

const store = createStore(ApplicationState);

// Development Purposes only
store.subscribe(() => console.log(store.getState()));

const Application = (
  <Provider store={store}>
    <div>{console.log(store.getState())}</div>
  </Provider>
);

render(Application, document.getElementById('app'));
