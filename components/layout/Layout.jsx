import React from 'react';
import './layout.css';

import Sidebar from '../sidebar/Sidebar';
import Routes from '../../Routes';

import { Router, Route } from 'react-router-dom';

const Layout = () => {
  return (
    <Router>
      <Route
        render={() => (
          <div className={"layout"}>
            <Sidebar />
            <div className='layout__content'>
              <div className='layout__content-main'>
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </Router>
  );
};

export default Layout;
