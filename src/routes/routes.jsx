import { Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" isPrivate={true} component={Dashboard} />
    </Switch>
  );
}
