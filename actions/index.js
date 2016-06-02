import repo from '../api/repo'
import * as types from '../constants/ActionTypes'
import {getValues} from 'redux-form';
import {toastr} from 'react-redux-toastr'

function recieveUpdate(data) {
    return {
        type: types.RECIEVE_UPDATE,
        data: data
    }
}

function recieveSettings(settings) {
    return {
        type: types.RECIEVE_SETTINGS,
        settings: settings
    }
}

function deleteSessionUnsafe(id) {
  toastr.success('Session was deleted',id)
  return {
    type: types.SESSION_DELETE,
    id
  }
}

function updateSessionUnsafe(data) {
  toastr.success('Session was updated',data.id)
  return {
    type: types.SESSION_UPDATE,
    id:data.id
  }
}

export function changeSettings(props) {
  return dispatch => {
    dispatch({
      type: types.CHANGE_SETTINGS,
      data:props
    })
    repo.changeSettings(props)
  }
}

export function changeSettingsComplete(props) {
  toastr.success('Settings are saved')
  return dispatch => dispatch({
    type: types.CHANGE_SETTINGS_COMPLETE,
    data:props
  })
}

export function logFromServer(message) {
  toastr.error('Error occured',message)
  return dispatch => dispatch({
    type: types.SERVER_ERROR_LOG,
    data:props
  })
}

export function connected() {
  return dispatch => dispatch({
    type: types.SERVER_CONNECTED
  })
}

export function connectionFailed(message) {
  toastr.error('Error occured',message)
  return dispatch => dispatch({
    type: types.SERVER_CONNECTION_FAILED
  })
}

export function getAllSessions() {
    return dispatch => {
      repo.recieveUpdate(data => {
        dispatch(recieveUpdate(data))
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

export function submitTime(id, who,createSubTicket) {
  return (dispatch, getState) => {
    repo.submitTime(id,who,createSubTicket,(e)=>{
      toastr.success('Session was submitted to Gemini')
    })
  }
}


export function importUsers() {
  return (dispatch, getState) => {
    dispatch({
      type: types.USERS_IMPORT
    })
    repo.importUsers()
  }
}

export function importUsersSuccess(users) {
  toastr.success('users are imported')
  return dispatch => dispatch({
    type: types.USERS_IMPORT_SUCCESS,
    users:users
  })
}
