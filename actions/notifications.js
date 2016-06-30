import {
  NOTIFICATION_ADDED,
  NOTIFICATION_REMOVED,
  NOTIFICATION_CLEAR,
} from "../constants/ActionTypes.js";

function notify(type, message, data=[], options={}) {
  const {clear=true} = options;
  return {
    type: NOTIFICATION_ADDED,
    clear,
    notification: {
      type,
      message,
      data,
    },
  };
}

export function notifyInfo(message, options) {
  return notify("info", message, [], options);
}

export function notifySuccess(message, options) {
  return notify("success", message, [], options);
}

export function notifyWarning(message, options) {
  return notify("warning", message, [], options);
}

export function notifyError(error, options) {
  console.error('NOTIFY ERROR', error, options);
  return notify("error", error.message, error.data, options);
}

export function removeNotification(index) {
  return {
    type: NOTIFICATION_REMOVED,
    index,
  };
}

export function clearNotifications(options={}) {
  return {
    type: NOTIFICATION_CLEAR,
    force: !!options.force
  };
}
