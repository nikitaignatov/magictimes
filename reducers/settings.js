import Immutable                     from 'immutable';
import { CHANGE_SETTINGS ,RECIEVE_UPDATE } from '../constants/ActionTypes'
import {getValues} from 'redux-form';


const initialState = {
  gemini: {
    ticket_url: 'https://tickets.company.com/workspace/0/item/{ticket}',
    api_key:'',
  },
  round_minutes_to: 15,
};

export default (state = initialState , action) => {
  switch (action.type) {
    case RECIEVE_UPDATE:
      return {...state,...action.data.settings}
    case CHANGE_SETTINGS:
      return {...state,...action.settings}
    default:
      return state
  }
}
