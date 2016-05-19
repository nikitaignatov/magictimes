import repo from '../api/repo'
import * as types from '../constants/ActionTypes'

function recieveSessions(sessions) {
    return {
        type: types.RECIEVE_SESSIONS,
        sessions: sessions
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

function deleteSessionUnsafe(id) {
  return {
    type: types.SESSION_DELETE,
    id
  }
}

export function deleteSession(id) {
  return (dispatch, getState) => {
    repo.remove(id,(e)=>{console.log('removed',e)})
      dispatch(deleteSessionUnsafe(id))
  }
}

export function updateSession(data) {
  return (dispatch, getState) => {
    repo.update(data,(e)=>{console.log('removed',e)})
  }
}
