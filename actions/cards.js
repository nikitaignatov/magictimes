import {
  CARD_ASSIGN,
  CARD_ASSIGN_SUCCESS
} from "../constants/ActionTypes.js";


export function assignCard(card) {
  return { type: CARD_ASSIGN, card: card}
}

export function assignCardSuccess(card) {
  return { type: CARD_ASSIGN_SUCCESS, card: card }
}
