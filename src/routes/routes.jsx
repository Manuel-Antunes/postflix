import { Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Route from './Route';
import AddUser from '../pages/AddUser';
import AddPost from '../pages/AddPost';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact isPrivate={true} component={Dashboard} />
      <Route path="/signup" exact component={AddUser} />
      <Route path="/post/create" isPrivate={true} exact component={AddPost} />
    </Switch>
  );
}
