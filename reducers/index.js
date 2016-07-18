import { combineReducers } from 'redux'
import server from './server'
import session from './session'
import sessions from './sessions'
import settings from './settings'
import users from './users'
import notifications from './notifications'
import { reducer as toastrReducer} from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux'

import {
  modelReducer,
  formReducer
} from 'react-redux-form';

const initialSessionState = {
  comment: ''
};

export default combineReducers({
  routing: routerReducer,  
  sessionForm: formReducer('session'),
  toastr: toastrReducer,
  server,
  session,
  sessions,
  settings,
  users,
  notifications
})
