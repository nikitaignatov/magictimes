import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import settings from './reducers/settings'
import sessions from './reducers/sessions'
import { getAllSessions } from './actions'
import App from './containers/App'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  combineReducers({
     settings,
     sessions
  }),
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
