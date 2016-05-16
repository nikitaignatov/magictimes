var React = require('react');
var UserStore = require('../../stores/UserStore');
var User = require('./user');

function geState() {
    return {
        data: UserStore.getAll()
    };
}

var UserList = React.createClass({
    getInitialState: function () {
        console.log('init')
        return geState();
    },
    onChange: function () {
        console.log('change')
        this.setState(geState());
    },
    componentDidMount: function () {
        UserStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        UserStore.removeChangeListener(this.onChange);
    },
    render: function () {
        console.log('users')
        
        var users = this.state.data.users.map(function (user) {
            return (<User user={user} key={user.Username } />);
        });
        console.log('users 2')

        return (<div className="col-xs-12">{users}</div>);
    }
});


module.exports = UserList;