import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistory, routeReducer } from 'redux-simple-router'
import { hashHistory } from 'react-router'
import routes from './config/routes'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import settings from './reducers/settings'
import sessions from './reducers/sessions'
import { getAllSessions } from './actions'
import App from './containers/App'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ,syncHistory(hashHistory)] :
  [ thunk,syncHistory(hashHistory), logger() ]

const store = createStore(
  combineReducers({
    routeReducer,
    settings,
    sessions
  }),
  applyMiddleware(...middleware)
)

console.log('store',store.getState())

store.dispatch(getAllSessions())

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
