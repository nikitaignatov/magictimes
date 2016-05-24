import React from 'react'
import {Router, Route,IndexRoute, hashHistory} from 'react-router'
import App from '../containers/App'
import SessionsContainer from '../containers/SessionsContainer'
import SettingsContainer from '../containers/SettingsContainer'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={SessionsContainer} />
      <Route path="settings" component={SettingsContainer} />
    </Route>
  </Router>
)
