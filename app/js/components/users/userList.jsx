var React = require('react');
var User = require('./user');

var UserList = React.createClass({
    getInitialState: function () {
        return { data: { new_sessions: [], ready_to_submit: [], complete: [], users: [] }, magic: {} };
    },
    update: function (data) {
        this.setState({ data: data });
    },
    connectToHub: function () {
        this.magic = $.connection.nfcHub;
        this.magic.client.update = this.update;
        this.setState({ magic: this.magic });
        $.connection.hub.url = "http://localhost:9000/signalr";
        $.connection.hub.start();
    },
    componentDidMount: function () {
        var self = this;
        this.connectToHub();
    },
    render: function () {
        console.log('users')
        
        var users = this.state.data.users.map(function (user) {
            return (<User user={user} key={user.Username } />);
        });
        return (<div className="col-xs-12">{users}</div>);
    }
});


module.exports = UserList;