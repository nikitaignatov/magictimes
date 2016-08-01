import { NOTIFICATION_ADDED ,NEW_CARD_RECIEVED  } from '../constants/ActionTypes'
const initialState= { notification:{} }

export default (state = initialState, action) => {
  console.log(state.toastr)
  switch (action.type) {
    case NOTIFICATION_ADDED:
      console.log("NOTIFICATION_ADDED =>",action.data)
      return {...state,...{notification:action.data}}
    case NEW_CARD_RECIEVED:
      return {...state,...{prompt:action.data}}
    default:
      return state
  }
}