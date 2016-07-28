import Immutable from 'immutable'
import { SESSION_VIEW, SESSION_START, SESSION_START_COMPLETE, SESSION_DELETE, SESSION_UPDATE, SESSION_DELETE_COMPLETE, SESSION_SUBMIT_TIME, SESSION_SUBMIT_TIME_COMPLETE } from '../constants/ActionTypes'
import { routeActions, push } from 'react-router-redux'
import Guid from 'guid'

import { toastr } from 'react-redux-toastr'

function wrap (CASE, data) {
  return {Case: CASE,Fields: data ? data : []}
}

function SessionCommand (CASE, id, ...data) {
  return wrap('SessionCommand', [wrap('Session_id', [id]), wrap(CASE, data)])
}

export const startSessionAction = (comment) => {
  return { type: SESSION_START, comment}
}

export function viewSessionAction (id,data) {
  return { type: SESSION_VIEW, id, data}
}

function deleteSessionAction (id) {
  return { type: SESSION_DELETE, id}
}

function deleteSessionCompleteAction (id) {
  return { type: SESSION_DELETE_COMPLETE, id}
}

function submitTimeAction (data) {
  return { type: SESSION_SUBMIT_TIME, data}
}

function submitTimeCompleteAction (id) {
  return { type: SESSION_SUBMIT_TIME_COMPLETE, id}
}

export function deleteSession (id) {
  return (dispatch, getState) => {
    dispatch(deleteSessionAction(id))
    getState().server.proxy.invoke('command', SessionCommand('Delete', id))
  }
}

export function startSession (data) {
  return (dispatch, getState) => {
    dispatch(startSessionAction(data.log))
    let uid = Guid.raw()
    getState().server.proxy.invoke('command', SessionCommand('Create', uid, uid, data.log))
  }
}

export function viewSession (id) {
  return (dispatch, getState) => {
    dispatch(push('/sessions/' + id))
    var data = getState().sessions.find(x => x.id == id)
    dispatch(viewSessionAction(id,data))
  }
}

export function deleteSessionComplete (id) {
  return (dispatch, getState) => {
    toastr.success('SESSION DELETED', id)
    dispatch(deleteSessionCompleteAction(id))
  }
}

export function updateSession (data) {
  return (dispatch, getState) => {
    dispatch({ type: SESSION_UPDATE, data})
    getState().server.proxy
      .invoke('command', SessionCommand('Comment', data.id, data.message))
      .done((e) => toastr.success('Session was updated'))
  }
}

export function submitTime (id, who, createSubTicket) {
  return (dispatch, getState) => {
    dispatch(submitTimeAction({id,who,createSubTicket}))
    getState().server.proxy.invoke('submitTimeEntry', {Input: {Session: id,SubmitFor: who, CreateNewTicket: createSubTicket}})
  }
}

export function submitTimeComplete (id) {
  return (dispatch, getState) => {
    toastr.success('Session was submitted to Gemini')
    dispatch(submitTimeCompleteAction(id))
  }
}
