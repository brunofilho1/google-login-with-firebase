import React from 'react';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import ScreenRoutes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ScreenRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

