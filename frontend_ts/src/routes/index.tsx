import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import NewConsulta from '../pages/newConsulta';
import NewUser from '../pages/newUser';
import ShowConsultas from '../pages/Consultas';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/newUser' component={NewUser} />
        <Route path='/novaconsulta' component={NewConsulta} />
        <Route path='/consultas' component={ShowConsultas} />
    </Switch>
);

export default Routes;