import React from 'react'
import {Router, Route,IndexRoute, hashHistory} from 'react-router'
import App from '../containers/App'
import SessionsContainer from '../containers/SessionsContainer'
import SettingsContainer from '../containers/SettingsContainer'
import UsersContainer from '../containers/UsersContainer'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={SessionsContainer} />
      <Route path="settings" component={SettingsContainer} />
      <Route path="users" component={UsersContainer} />
    </Route>
  </Router>
)
