import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';

console.log(App, "WHat");

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();