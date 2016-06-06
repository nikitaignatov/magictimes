import {
  USERS_IMPORT,
  USERS_IMPORT_SUCCESS,
  USERS_ASSIGN_CARD,
  USERS_ASSIGN_CARD_SUCCESS,
} from "../constants/ActionTypes.js";

export function importUsersAction() {
  return { type: USERS_IMPORT }
}

export function importUsersSuccessAction(users) {
  return { type: USERS_IMPORT_SUCCESS, users: users }
}

export function assignCardToUser(card, user) {
  return { type: USERS_ASSIGN_CARD, card: card, user: user }
}

export function assignCardToUserSuccess(user) {
  return { type: USERS_ASSIGN_CARD_SUCCESS, user: user }
}

export function importUsers() {
  return (dispatch, getState) => {
    dispatch(importUsersAction())
    getState().server.proxy.invoke('importUsers');
  }
}

export function importUsersSuccess(users) {
  toastr.success('users are imported')
  return dispatch => dispatch(importUsersSuccessAction(users))
}

export function registerUser(data) {
  return (dispatch, getState) => {
    console.log('registerUser',getState())
    swal({
      title: "Who is this?",
      text: 'You need to register the user:',
      input: 'select',
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputOptions: {
      'SRB': 'Serbia',
      'UKR': 'Ukraine',
      'HRV': 'Croatia'
      },
    }, function(user){
        getState().server.proxy.register(data,user,registerUserSuccess)
    });
    dispatch({
      type: types.USERS_REGISTER
    })
  }
}

function registerUserSuccess(data,user) {
  console.log('REG SUCC',user,data)
  swal("Registered!",  user + ' has been assigned to ' + data,  "success")
  return {
      type: types.USERS_REGISTER_SUCCESS
  }
}
