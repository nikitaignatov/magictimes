var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _users = { users: [] };
function assignCard(id, user) {
    console.log('assign card', id, user)
    //_hub.server.assignCard(id, user)
    UserStore.emitChange()
}
function reload(data) {
    console.log('reload user', data.users)
    _users.users = data.users
    UserStore.emitChange()
}

$(function () {
    var _hub = $.connection.nfcHub;
    _hub.client.update = reload
})


var UserStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        console.log('get all',_users)
        return _users;
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
        case UserConstants.USER_ASSIGN_CARD:
            assignCard(action.id, action.user);
            UserStore.emitChange();
            break;


        default:
            // no op
    }
});

module.exports = UserStore;