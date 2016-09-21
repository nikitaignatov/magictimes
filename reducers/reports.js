import { RECIEVE_UPDATE,TIME_REPORT_RECIEVED } from '../constants/ActionTypes'
import { modeled } from 'react-redux-form'


const initialState = {today:[], time_report:[]}
const m = (state = initialState , action) => {
  switch (action.type) {
    case RECIEVE_UPDATE: return { today:[], time_report:[]}
    case TIME_REPORT_RECIEVED: return { time_report: action.data, today:[]}
    default: return state
  }
}

const reducer1 = modeled(m, 'sessions')

export default reducer1
