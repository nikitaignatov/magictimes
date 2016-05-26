import Immutable                     from 'immutable';
import { CHANGE_SETTINGS } from '../constants/ActionTypes'
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
    case CHANGE_SETTINGS:
      return action.data
    default:
      return state
  }
}
