import React from 'react';
import ReactDOM from 'react-dom';

import './style/reset.css';
import './style/abstract.scss';

import App from './component/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
