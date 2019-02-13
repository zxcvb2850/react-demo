import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import App from './App';
import todoApp from "./reducers"
import * as serviceWorker from './serviceWorker';

const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
