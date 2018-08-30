import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Planets from './Planets';

const Main = props => (
  <main className="page-content">
  {/* Switch prevents you from loading multiple components at the same time */}
    <Switch>
      {/* The exact make sure planets doesn't render when you go home */}
      {/* the method doesn't pass any props to children */}
      <Route exact={true} path='/' component={Home}/>
      <Route path='/planets' component={Planets} />
      {/* <Planets /> */}
    </Switch>
  </main>
)

export default Main