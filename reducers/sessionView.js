import { SESSION_VIEW } from '../constants/ActionTypes'
import { modeled } from 'react-redux-form'
const initialState = {
  'log': '',
}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case SESSION_VIEW:
      return action.data
    default:
      return state
  }
}

const reducer1 = modeled(reducer, 'sessionView')

export default reducer1
