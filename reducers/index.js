import { combineReducers } from 'redux'
import server from './server'
import sessionCreator from './sessionCreator'
import sessionView from './sessionView'
import sessions from './sessions'
import settings from './settings'
import users from './users'
import notifications from './notifications'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux'
import { modelReducer, formReducer } from 'react-redux-form'

export default combineReducers({
  routing: routerReducer,
  sessionCreatorForm: formReducer('sessionCreator'),
  sessionsForm: formReducer('sessions'),
  toastr: toastrReducer,
  server,
  sessionCreator,
  sessions,
  settings,
  users,
notifications})
