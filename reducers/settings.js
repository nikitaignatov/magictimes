"use strict";

import Immutable                     from 'immutable';
import { RECIEVE_SETTINGS } from '../constants/ActionTypes'

const initialState = Immutable.fromJS({
  gemini: {
    ticket_url: 'https://tickets.company.com/workspace/0/item/{ticket}',
    api_key:'',
  },
  round_minutes_to: 15,
}); 

export default (state = initialState , action) => {
  switch (action.type) {
    case RECIEVE_SETTINGS:
      return action.settings
    default:
      return state
  }
}
