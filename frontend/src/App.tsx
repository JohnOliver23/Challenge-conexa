import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

import { ToastContainer } from 'react-toastify';

import Header from './components/Header';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Header />
      <Routes />
      <ToastContainer />
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
