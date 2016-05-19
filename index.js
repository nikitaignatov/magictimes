import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import sessions from './reducers/sessions'
import { getAllSessions } from './actions'
import App from './containers/App'

import admin from './node_modules/admin-lte/dist/css/AdminLTE.min.css'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  sessions,
  applyMiddleware(...middleware)
)

console.log('store',store.getState())

store.dispatch(getAllSessions())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
