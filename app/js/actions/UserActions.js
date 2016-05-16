var AppDispatcher = require('../dispatcher');
var UserConstants = require('../constants/UserConstants');

var UserActions = {
    assignCard: function (id, user) {
        AppDispatcher.dispatch({
            actionType: UserConstants.USER_ASSIGN_CARD,
            id: id,
            user: user,
        });
    }
};

module.exports = UserActions;