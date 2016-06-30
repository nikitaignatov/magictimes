import {
  USERS_IMPORT,
  USERS_IMPORT_SUCCESS,
  USERS_ASSIGN_CARD,
  USERS_ASSIGN_CARD_SUCCESS,
  NEW_CARD_RECIEVED,
  USERS_REGISTER,
  USERS_REGISTER_SUCCESS,
} from "../constants/ActionTypes.js";
import _ from 'lodash'
import {toastr} from 'react-redux-toastr'

export function importUsersAction() {
  return { type: USERS_IMPORT }
}

export function importUsersSuccessAction(users) {
  return { type: USERS_IMPORT_SUCCESS, users: users }
}

export function assignCardToUser(card, user) {
  return { type: USERS_ASSIGN_CARD, card: card, user: user }
}
export function newCardRecieved(data) {
  return { type: NEW_CARD_RECIEVED, data }
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
    dispatch(newCardRecieved(data))
    let values = _
      .chain(data.users)
      .keyBy('Email')
      .mapValues('Name')
      .value();

    swal({
      title: "Who is this?",
      text: 'You need to register the user:',
      input: 'select',
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputOptions: values,
    }).then(function(user) {
      if (user) {
        console.log('SELECTED', user)

        dispatch({
          type: USERS_REGISTER,
          user,
          card: data.card
        })
        getState().server.proxy.invoke('register', data.card, user).done((r)=>console.log('REGR:',r))
      }
    });
  }
}

function registerUserSuccess(data,user) {
  console.log('REG SUCC',user,data)
  swal("Registered!",  user + ' has been assigned to ' + data,  "success")
  return {
      type: USERS_REGISTER_SUCCESS
  }
}
