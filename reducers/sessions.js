import { combineReducers } from 'redux'
﻿import { RECIEVE_SESSIONS } from '../constants/ActionTypes'

function sessions(state = {complete:[],new_sessions:[],ready_to_submit:[]}, action) {
  switch (action.type) {
    case RECIEVE_SESSIONS:
      return action.sessions
    default:
      return state
  }
}

export default combineReducers({
  sessions
})

export function getSessions(state) {
  return state.sessions
}
