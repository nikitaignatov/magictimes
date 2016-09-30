import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './containers/App'
import ReportsContainer from './containers/ReportsContainer'
import UserContainer from './containers/UserContainer'

export default history => (
  <Router history={history}>
    <Route path="/period/:period_start/:period_end/" component={App}>
      <IndexRoute component={ReportsContainer} />
      <Route path="reports" component={ReportsContainer} >
        <Route path="view/:id/:days" component={ReportsContainer} />      
      </Route>
      <Route path="user" component={UserContainer} >
        <Route path=":id" component={UserContainer} />      
      </Route>
    </Route>
  </Router>
)
