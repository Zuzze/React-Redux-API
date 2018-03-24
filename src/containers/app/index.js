import React from 'react';
import { Route, Link } from 'react-router-dom';
import Vessels from '../vessels';
import Containers from '../containers';
import vesselPlans from '../vesselPlans';
import Navigation from '../../components/navigation'
require('../../index.scss');

const App = () => (
  <div>
    <header>
      <Navigation/>
    </header>

    <main id="container">
      <Route exact path="/vessels" component={Vessels} />
      <Route exact path="/containers" component={Containers} />
      <Route exact path="/vessel_plans" component={vesselPlans} />
    </main>
  </div>
);

export default App;