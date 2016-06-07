import { RECIEVE_SESSIONS,RECIEVE_UPDATE  } from '../constants/ActionTypes'

const initialState= {complete:[],new_sessions:[],ready_to_submit:[],dashboard:{  total_minutes:0,  total_questions:0,  total_sessions:0}}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_UPDATE:
      let sessions={
        dashboard:{
          total_minutes:action.data.total_minutes,
          total_questions:action.data.total_questions,
          total_sessions:action.data.total_sessions
        },
        complete:action.data.complete,
        new_sessions:action.data.new_sessions,
        ready_to_submit:action.data.ready_to_submit
      }
      return {...state,...sessions}
    default:
      return state
  }
}
