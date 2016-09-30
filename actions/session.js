import Immutable from 'immutable'
import { TIME_REPORT_RECIEVED, SESSION_START, SESSION_START_COMPLETE, SESSION_DELETE, SESSION_UPDATE, SESSION_DELETE_COMPLETE, SESSION_SUBMIT_TIME, SESSION_SUBMIT_TIME_COMPLETE } from '../constants/ActionTypes'
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

export function viewSessionAction (id, data) {
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

function timeReport (data) {
  return { type: TIME_REPORT_RECIEVED, data}
}

export function deleteSession (id) {
  return (dispatch, getState) => {
    dispatch(deleteSessionAction(id))
    getState().server.proxy.invoke('command', SessionCommand('Delete', id))
  }
}

export function viewTimeReportBy (type, days) {
  return (dispatch, getState) => {
    console.log(getState().server.proxy)
    getState().server.proxy.invoke('request', { resource: type,days: days })
      .done((data) => {
        console.table(data.Fields[0])
        dispatch(timeReport(data.Fields[0]))
      })
  }
}

export function periodChanged (start, end) {
  return (dispatch, getState) => dispatch({type: 'PERIOD_CHANGED',data: {start: start,end: end}})
}
