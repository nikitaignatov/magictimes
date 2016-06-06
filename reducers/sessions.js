import { RECIEVE_SESSIONS,RECIEVE_UPDATE  } from '../constants/ActionTypes'

const initialState= {complete:[],new_sessions:[],ready_to_submit:[]}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_UPDATE:
      let sessions={
complete:action.data.complete,
new_sessions:action.data.new_sessions,
ready_to_submit:action.data.ready_to_submit
      }
      return {...state,...sessions}
    default:
      return state
  }
}
