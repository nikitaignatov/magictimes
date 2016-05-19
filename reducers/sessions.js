import { combineReducers } from 'redux'
﻿import { RECIEVE_SESSIONS } from '../constants/ActionTypes'

function completed(state = [], action) {
  switch (action.type) {
    case RECIEVE_SESSIONS:
      return action.sessions.complete
    default:
      return state
  }
}

function new_sessions(state = [], action) {
  switch (action.type) {
    case RECIEVE_SESSIONS:
      return action.sessions.new_sessions
    default:
      return state
  }
}

export default combineReducers({
  completed,
  new_sessions
})

export function getCompleted(state) {
  return state.completed
}

export function getNew(state) {
  return state.new_sessions
}
