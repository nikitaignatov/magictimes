import Immutable from 'immutable'
import { RECIEVE_UPDATE, USERS_IMPORT } from '../constants/ActionTypes'
import { getValues } from 'redux-form'

const initialState = [
  {
    'username': 'admin',
    'email': 'admin@localhost',
    'id': 'a1cda3e2-c6e2-4b13-942a-dff26c3f1386',
    'sources': [],
    'meta': {
      'created': '2016-07-16T16:16:03.1899628+02:00',
      'version': 1
    }
  }]

export default (state = initialState , action) => {
  console.log(action)
  switch (action.type) {
    case USERS_IMPORT:
      return state
    case RECIEVE_UPDATE:
      return action.data.users
    default:
      return state
  }
}
