import repo from '../api/repo'
import * as types from '../constants/ActionTypes'

function recieveSessions(sessions) {
    return {
        type: types.RECIEVE_SESSIONS,
        sessions: sessions
    }
}

function deleteSessionUnsafe(id) {
  return {
    type: types.SESSION_DELETE,
    id
  }
}

function updateSessionUnsafe(id) {
  return {
    type: types.SESSION_UPDATE,
    id
  }
}

export function getAllSessions() {
    console.log('recieve sessions')
    return dispatch => {
      repo.getSessions(sessions => {
        dispatch(recieveSessions(sessions))
      })
    }
}

export function deleteSession(id) {
  return (dispatch, getState) => {
    repo.remove(id,(e) => dispatch(deleteSessionUnsafe(id)))
  }
}

export function updateSession(data) {
  return (dispatch, getState) => {
    repo.update(data,(e)=>dispatch(updateSessionUnsafe(id)))
  }
}

export function submitTime(id) {
  return (dispatch, getState) => {
    repo.update(id,(e)=>{console.log('removed',e)})
  }
}
