import { RECIEVE_SESSIONS,RECIEVE_UPDATE,NOTIFICATION_ADDED  } from '../constants/ActionTypes'

const initialState= {complete:[],new_sessions:[],ready_to_submit:[],dashboard:{  total_minutes:0,  total_questions:0,  total_sessions:0}}

export default (state = initialState, action) => {

  console.log(state.toastr)
  switch (action.type) {
    case RECIEVE_UPDATE:
      let data = action.data

        console.log('let data',data)
      let sessions={
        dashboard:{
          total_minutes:data.total_minutes,
          total_questions:data.total_questions,
          total_sessions:data.total_sessions
        },
        complete:data.complete,
        new_sessions:data.new_sessions,
        ready_to_submit:data.ready_to_submit
      }
      return {...state,...sessions}
    case NOTIFICATION_ADDED:
      return {...state,...{notification:'pooop'}}
    default:
      return state
  }
}
