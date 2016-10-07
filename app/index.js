import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './reducers';
import Container from './Container';

const store = createStore(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('app')
);
