import 'babel-polyfill'
import React from 'react'
import { render  } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore,routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { createHistory } from 'history'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import routes from './config/routes'
import reducer from './reducers'
import {startSignlar} from './api/repo'
import App from './containers/App'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk,routerMiddleware(browserHistory), ] :
  [ thunk,routerMiddleware(browserHistory), logger() ]

const store = createStore(reducer, applyMiddleware(...middleware))

const history = syncHistoryWithStore(browserHistory, store)
startSignlar(store)

render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
  document.getElementById('app')
)
