import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Library from './components/library';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
      <library />  
    </Provider>,
  document.getElementById('app')
);