// import '@babel/polyfill';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

ReactDom.render(
  <div>
    <App />
    222
  </div>,
  document.querySelector('#app'),
);

module.hot.accept();
