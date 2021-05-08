import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import Consultations from '../pages/Consultations';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/consultations" exact component={Consultations} isPrivate />
  </Switch>
);

export default Routes;
