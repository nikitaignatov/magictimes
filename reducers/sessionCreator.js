import { SESSION_START_COMPLETE } from '../constants/ActionTypes'
import { modeled } from 'react-redux-form'
const initialState = {
  'log': '',
}

const sessionReducer = (state = initialState , action) => {
  switch (action.type) {
    case SESSION_START_COMPLETE:
      return initialState
    default:
      return state
  }
}

const sessionModeledReducer = modeled(sessionReducer, 'sessionCreator')

export default sessionModeledReducer
