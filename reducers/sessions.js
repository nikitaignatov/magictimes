﻿import { RECIEVE_SESSIONS,RECIEVE_UPDATE,NOTIFICATION_ADDED,SESSION_START,SESSION_START_COMPLETE,SESSION_VIEW  } from '../constants/ActionTypes'

const init = a=> {return {
    "log": a,
    "startTime": "2016-07-16T16:16:03.1899628+02:00",
    "endTime": null,
    "id": "41731c66-7a1f-4dc9-a71d-e536655f18ba",
    "tags": [],
    "project": null,
    "user": {
      "username": "niig",
      "email": "niig@niig.dk",
      "id": "a1cda3e2-c6e2-4b13-942a-dff26c3f1386",
      "sources": [],
      "meta": {
        "created": "2016-07-16T16:16:03.1899628+02:00",
        "version": 1
      }
    },
    "participants": [],
    "meta": {
      "created": "2016-07-16T16:16:03.1899628+02:00",
      "version": 1
    },
    "duration": "00:00:06.0847661"
  }
}

const initialState= [init('checking logs'),init('testing database connection'), init('implementation')]

export default (state = initialState, action) => {
  switch (action.type) {
    case RECIEVE_UPDATE:
      return action.data.new_sessions
    case SESSION_START:
      return state
    case SESSION_START_COMPLETE:
      return [action.data,...state]
    default:
      return state
  }
}
