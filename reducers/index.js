import { combineReducers } from 'redux'
import server from './server'
import sessions from './sessions'
import settings from './settings'
import users from './users'
import notifications from './notifications'
import { reducer as formReducer} from 'redux-form';
import { reducer as toastrReducer} from 'react-redux-toastr'
import { routeReducer } from 'redux-simple-router'

export default combineReducers({
  routeReducer,
  form: formReducer,
  toastr: toastrReducer,
  server,
  sessions,
  settings,
  users,
  notifications
})
