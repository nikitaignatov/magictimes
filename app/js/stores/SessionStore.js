
var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var SessionConstants = require('../constants/SessionConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _sessions = { new_sessions: [], ready_to_submit: [], complete: [], users: [] };
var _hub = {};

function update(id, message, ticket, state) {
    console.log('update', message, ticket, state)
    _hub.server.commentOn(id, message, ticket, state)
}

function submitEntry(id) {
    console.log('submitTimeEntry', id)
    _hub.server.submitTimeEntry(id)
    SessionStore.emitChange()
}

function reload(data) {
    console.log("reload session",data)
    _sessions = data;
    SessionStore.emitChange()
}

$(function() {
    var _hub = $.connection.nfcHub;
    _hub.client.update = reload;
});


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

    switch (action.actionType) {
        case SessionConstants.SESSION_UPDATE:
            update(action.id, action.text, action.ticket, action.status);
            SessionStore.emitChange();
            break;

        case SessionConstants.SESSION_SUBMIT:
            submitEntry(action.id);
            SessionStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = SessionStore;