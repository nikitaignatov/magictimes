import Immutable from 'immutable';
import {
  SERVER_ERROR_LOG,
  SERVER_CONNECTED,
  SERVER_DISCONNECTED,
  SERVER_CONNECTION_FAILED
} from '../constants/ActionTypes'
import {toastr} from 'react-redux-toastr'
import { routeActions,push } from 'react-router-redux'

export function serverErrorLog(message) {
  toastr.error('SERVER ERROR LOG', message)
  return { type: SERVER_ERROR_LOG, message:message}
}

export function serverConnected(proxy, id) {
  toastr.success('SERVER CONNECTED')
  return { type: SERVER_CONNECTED, proxy, id }
}

export function serverDisconnected() {
  toastr.warning('SERVER DISCONNECTED')
  return { type: SERVER_DISCONNECTED }
}

export function serverConnectionFailed(error) {
  toastr.error('SERVER CONNECTION FAILED', error)
  return { type: SERVER_CONNECTION_FAILED, error: error }
}

export function go(page) {
  console.log('GOTO:',page)
  return (dispatch, getState) => {dispatch(push(page))}  
}