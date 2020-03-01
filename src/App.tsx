import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/routes';

import {Provider} from 'react-redux';
import appStore from './store/store';

import './assets/scss/index.scss';
import { MainHeader } from './components/layout/main-header';

const App: React.FC = () => {
  return (
    <div className="dogTheme">
      <MainHeader/>
      <Router>
        <Provider store={appStore}>
          <Routes></Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
