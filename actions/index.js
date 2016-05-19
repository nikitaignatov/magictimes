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
      dispatch(deleteSessionUnsafe(id))
  }
}
