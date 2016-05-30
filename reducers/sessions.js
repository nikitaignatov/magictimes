import { RECIEVE_SESSIONS,RECIEVE_UPDATE  } from '../constants/ActionTypes'

const initialState= {complete:[],new_sessions:[],ready_to_submit:[]}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_UPDATE:
      return action.data
    default:
      return state
  }
}
