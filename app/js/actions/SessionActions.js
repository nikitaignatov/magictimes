var AppDispatcher = require('../dispatcher');
var SessionConstants = require('../constants/SessionConstants');

var SessionActions = {

    updateMessage: function (id,text) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.SESSION_UPDATE_MESSAGE,
            id:id,
            text: text
        });
    },

    loadAll: function () {
        AppDispatcher.dispatch({
            actionType: SessionConstants.SESSION_LOAD_ALL
        });
    },
    
};

module.exports = SessionActions;