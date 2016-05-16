
var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var SessionConstants = require('../constants/SessionConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var _sessions = { new_sessions: [], ready_to_submit: [], complete: [], users: [] };
var _hub = {};

function update(id, message, ticket, state) {
    _hub.server.commentOn(id, message, ticket, state)
}

function reload(data) {
    _sessions = data;
    SessionStore.emitChange()
}

(function () {
    _hub = $.connection.nfcHub;
    _hub.client.update = reload;
    $.connection.hub.url = "http://localhost:9000/signalr";
    $.connection.hub.start();
})();


var SessionStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _sessions;
    },
    getHub: function () {
        return _hub;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function (action) {
    var text;

    switch (action.actionType) {
        case SessionConstants.SESSION_UPDATE:
            text = action.text.trim();
            if (text !== '') {
                update(action.id, text, action.ticket, action.status);
                SessionStore.emitChange();
            }
            break;

        default:
            // no op
    }
});

module.exports = SessionStore;