import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux-store/store';
import './index.styles.css';
import App from './app/routes/index.routes';

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  rootElement,
  document.getElementById('app')
);
