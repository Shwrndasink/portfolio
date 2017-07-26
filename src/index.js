import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Marc White is Awesome';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();