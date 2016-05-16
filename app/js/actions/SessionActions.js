var AppDispatcher = require('../dispatcher');
var SessionConstants = require('../constants/SessionConstants');

var SessionActions = {

    update: function (id,text,ticket,status) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.SESSION_UPDATE,
            id:id,
            text: text,
            ticket: ticket,
            status:status
        });
    },
};

module.exports = SessionActions;