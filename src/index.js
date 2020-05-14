import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store.js';
import * as serviceWorker from './serviceWorker';
import {Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import {Provider} from "react-redux";

const history = createBrowserHistory(); 

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();