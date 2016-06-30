import Immutable from 'immutable';
import {
  SESSION_DELETE,
  SESSION_UPDATE,
  SESSION_DELETE_COMPLETE,
  SESSION_SUBMIT_TIME,
  SESSION_SUBMIT_TIME_COMPLETE
} from '../constants/ActionTypes'

import {toastr} from 'react-redux-toastr'

function wrap(CASE, data){
  return {Case:CASE,Fields:data ? [data]:[]}
}

function deleteSessionAction(id) {
  return { type: SESSION_DELETE, id }
}

function deleteSessionCompleteAction(id) {
  return { type: SESSION_DELETE_COMPLETE, id }
}

function submitTimeAction(data) {
  return { type: SESSION_SUBMIT_TIME, data }
}

function submitTimeCompleteAction(id) {
  return { type: SESSION_SUBMIT_TIME_COMPLETE, id }
}

export function deleteSession(id) {
  return (dispatch, getState) => {
    dispatch(deleteSessionAction(id))
    getState().server.proxy.invoke('command', wrap('DeleteSession',{id}));
  }
}

export function deleteSessionComplete(id) {
  return (dispatch, getState) => {
    toastr.success('SESSION DELETED', id)
    dispatch(deleteSessionCompleteAction(id))
   }
}

export function updateSession(data) {
  return (dispatch, getState) => {
    dispatch({ type: SESSION_UPDATE, data })
    getState().server.proxy
      .invoke('command',wrap('AddComment',{comment: data.message,id:data.id}))
      .done((e)=> toastr.success('Session was updated'));
  }
}

export function submitTime(id, who,createSubTicket) {
  return (dispatch, getState) => {
    dispatch(submitTimeAction({id,who,createSubTicket}))
    getState().server.proxy.invoke('submitTimeEntry',{Input:{Session:id,SubmitFor:who,CreateNewTicket:createSubTicket}})
  }
}

export function submitTimeComplete(id) {
  return (dispatch, getState) => {
    toastr.success('Session was submitted to Gemini')
    dispatch(submitTimeCompleteAction(id))
  }
}