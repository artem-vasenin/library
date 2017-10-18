import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
      <div className="store">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </Provider>,
  document.getElementById('app')
);