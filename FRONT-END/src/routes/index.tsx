import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashBoard from '../pages/DashBoard';
import Dossier from '../pages/Dossier';
import Home from '../pages/Home';
import Project from '../pages/Project';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashBoard" component={DashBoard} />
      <Route path="/home" component={Home} />
      <Route path="/project" component={Project} />
      <Route path="/singIn" component={SingIn} />
      <Route path="/singUp" component={SingUp} />
    </Switch>
  );
};

export default Routes;
