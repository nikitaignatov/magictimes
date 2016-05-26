import repo from '../api/repo'
import * as types from '../constants/ActionTypes'
import {getValues} from 'redux-form';

function recieveSessions(sessions) {
    return {
        type: types.RECIEVE_SESSIONS,
        sessions: sessions
    }
}
function recieveSettings(settings) {
    return {
        type: types.RECIEVE_SETTINGS,
        settings: settings
    }
}

function deleteSessionUnsafe(id) {
  return {
    type: types.SESSION_DELETE,
    id
  }
}

function updateSessionUnsafe(data) {
  return {
    type: types.SESSION_UPDATE,
    id:data.id
  }
}

export function changeSettings(props) {
  return {
    type: types.CHANGE_SETTINGS,
    data:props
  }
}

export function getAllSessions() {
    return dispatch => {
      repo.getSettings(settings => {
        dispatch(recieveSettings(settings))
      })
    }
}

export function getAllSessions() {
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
    repo.update(data,(e)=>dispatch(updateSessionUnsafe(data)))
  }
}

export function submitTime(id) {
  return (dispatch, getState) => {
    repo.submitTime(id,(e)=>{console.log('removed',e)})
  }
}
