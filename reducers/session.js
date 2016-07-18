import { RECIEVE_SESSIONS, RECIEVE_UPDATE, NOTIFICATION_ADDED, SESSION_START, SESSION_VIEW, SESSION_START_COMPLETE } from '../constants/ActionTypes'
import { modeled } from 'react-redux-form'
const initialState = {
  'comment': '',
}

const sessionReducer = (state = initialState , action) => {
  switch (action.type) {
    case SESSION_START_COMPLETE:
      return initialState
    default:
      return state
  }
}

const sessionModeledReducer = modeled(sessionReducer, 'session')

export default sessionModeledReducer
