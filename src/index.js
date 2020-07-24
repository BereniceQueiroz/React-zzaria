import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { GlobalStyle  } from 'Styles/global'

ReactDOM.render(
  <React.StrictMode>
    <Root />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
