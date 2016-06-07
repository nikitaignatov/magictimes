import Immutable                     from 'immutable';
import { RECIEVE_UPDATE,USERS_IMPORT } from '../constants/ActionTypes'
import {getValues} from 'redux-form';

const initialState =[{
    Email: 'user@company.com',
    Name: 'Pavel Ivanov',
    Cards:[]
  },];

export default (state = initialState , action) => {
  console.log(action)
  switch (action.type) {
    case USERS_IMPORT:
      return state
    case RECIEVE_UPDATE:
      return action.data.users;
    default:
      return state
  }
}
