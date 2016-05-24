import { RECIEVE_SESSIONS } from '../constants/ActionTypes'

const initialState= {complete:[],new_sessions:[],ready_to_submit:[]}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_SESSIONS:
      return action.sessions
    default:
      return state
  }
}
