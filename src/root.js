import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthProvider from 'context/auth'
import App from './App'

function Root() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
    </AuthProvider>
  );
}

export default hot(module) (Root);


