import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './containers/App'
import SessionsContainer from './containers/SessionsContainer'
import ReportsContainer from './containers/ReportsContainer'

export default history => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={SessionsContainer} />
      <Route path="sessions" component={SessionsContainer} />
      <Route path="reports" component={ReportsContainer} />
      <Route path="sessions/:id" component={SessionsContainer} />
    </Route>
  </Router>
)
