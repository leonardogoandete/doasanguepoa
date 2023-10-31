import React from 'react'

import { Router, Switch, Route } from 'react-router'
import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import NotFound from './NotFound/NotFound'
import PrivateRoute from './PrivateRoute'
import Postagem from '../pages/feed/feed.js'
import Agendamento from '../pages/agendamento/Agendamento'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/"/>
            <Route component={Register} exact path="/cadastro/usuario"/>
            <PrivateRoute component={Home} exact path="/home"/>
            <PrivateRoute component={Agendamento} exact path="/agendamento"/>
            <PrivateRoute component={NotFound}/>
            <Route component={Postagem} exact path="/postagens"/>
        </Switch>
    </Router>
)

export default Routes
