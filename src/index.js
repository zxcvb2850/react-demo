import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store"
import * as serviceWorker from './serviceWorker';
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import AuthRoute from "./component/authroute/index";
import BossInfo from "./pages/bossInfo/bossInfo"
import GeniusInfo from "./pages/geniusInfo/geniusInfo"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <AuthRoute/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/bossinfo" component={BossInfo}/>
        <Route path="/geniusinfo" component={GeniusInfo}/>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
