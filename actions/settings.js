import Immutable from 'immutable';
import {
  RECIEVE_SETTINGS,
  CHANGE_SETTINGS,
  CHANGE_SETTINGS_COMPLETE
} from '../constants/ActionTypes'

import {toastr} from 'react-redux-toastr'

export function recieveSettingsAction(settings) {
    return { type: RECIEVE_SETTINGS, settings: settings }
}

export function changeSettingsAction(settings) {
    return { type: CHANGE_SETTINGS, settings: settings }
}

export function changeSettingsCompleteAction(settings) {
    return { type: CHANGE_SETTINGS_COMPLETE, settings: settings }
}

export function changeSettings(settings) {
  return (dispatch, getState) => {
    dispatch(changeSettingsAction(settings))
    getState().server.proxy.invoke('changeSettings', settings).done((e)=> console.log('changeSettings done',e));
  }
}

export function changeSettingsComplete(props) {
  toastr.success('Settings are saved')
  return dispatch => dispatch(changeSettingsCompleteAction(props))
}
