import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import Products from './components/pages/Product';
import Orders from './components/pages/Orders';
import CloudService from './components/pages/CloudService';
import Billing from './components/pages/Billing';
import Wallet from './components/pages/Wallet';
import Settings from './components/pages/Settings';
import Profile from './components/pages/Profile';
const Routes = () => {
  return (
    <Switch>
      <Route path='/dashboard/' exact component={Dashboard} />
      <Route path='/dashboard/products' component={Products} />
      <Route path='/dashboard/orders' component={Orders} />
      <Route path='/dashboard/cloud-service' component={CloudService} />
      <Route path='/dashboard/billing' component={Billing} />
      <Route path='/dashboard/wallet' component={Wallet} />
      <Route path='/dashboard/settings' component={Settings} />
      <Route path='/dashboard/profile' component={Profile} />
    </Switch>
  );
};

export default Routes;
