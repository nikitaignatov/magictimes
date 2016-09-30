import { SERVER_ERROR_LOG, SERVER_CONNECTED, SERVER_DISCONNECTED, SERVER_CONNECTION_FAILED} from '../constants/ActionTypes'

const initialState = {
  proxy: {},
  period: {}
}

export default (state = initialState , action) => {
  switch (action.type) {
    case SERVER_CONNECTED: return { ...state, proxy: action.proxy }
    case 'PERIOD_CHANGED': return { ...state, period: action.data }
  }
  return state
}
