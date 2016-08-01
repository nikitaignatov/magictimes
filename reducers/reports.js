import { RECIEVE_UPDATE } from '../constants/ActionTypes'
import { modeled } from 'react-redux-form'


const initialState = {today:[]}
const m = (state = initialState , action) => {
  switch (action.type) {
    case RECIEVE_UPDATE:
      return { today: action.data.today}
    default:
      return state
  }
}

const reducer1 = modeled(m, 'sessions')

export default reducer1
