import Immutable from 'immutable'
import { TIME_REPORT_RECIEVED } from '../constants/ActionTypes'
import { routeActions, push } from 'react-router-redux'
import Guid from 'guid'

import { toastr } from 'react-redux-toastr'

function wrap (CASE, data) {
  return {Case: CASE,Fields: data ? data : []}
}

function SessionCommand (CASE, id, ...data) {
  return wrap('SessionCommand', [wrap('Session_id', [id]), wrap(CASE, data)])
}

function timeReport (data) {
  return { type: TIME_REPORT_RECIEVED, data}
}

export function viewTimeReportBy (type, days) {
  return (dispatch, getState) => {
    const {start, end} = getState().server.period
    getState().server.proxy.invoke('request', { resource: type, period: { Item1: start, Item2: end } })
      .done((data) => {
        dispatch(timeReport(data.Fields[0]))
      })
  }
}

export function periodChanged (start, end) {
  return (dispatch, getState) => {
    if (start && end && (start <= end)) {
      const current = getState().server.period
      if (current && start === current.start && end === current.end) {
        return
      } else {
        dispatch({type: 'PERIOD_CHANGED',data: {start: start,end: end}})
        getState().server.proxy.invoke('request', { resource: 'CHANGE_PERIOD', period: { Item1: start, Item2: end } })
      }
    }
  }
}
