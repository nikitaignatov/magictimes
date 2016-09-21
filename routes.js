import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './containers/App'
import ReportsContainer from './containers/ReportsContainer'

export default history => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={ReportsContainer} />
      <Route path="reports" component={ReportsContainer} />
    </Route>
  </Router>
)
