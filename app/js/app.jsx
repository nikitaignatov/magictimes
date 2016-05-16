var React = require('react');
var Dashboard = require('./components/sessions/sessions');
var UserList = require('./components/users/userList');

var Router = window.ReactRouter.Router
var Route = window.ReactRouter.Route
var IndexRoute = window.ReactRouter.IndexRoute
var Link = window.ReactRouter.Link
var hashHistory = window.ReactRouter.hashHistory

var ImportUsers = React.createClass({
    render: function () {
        return (
            <a href="#" onClick={this.importUsers}><i className="fa fa-circle-o text-red"></i> <span>Import users</span></a>
        );
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
    importUsers: function () {
        this.magic.server.importUsers();
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div >
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute  component={Dashboard}></IndexRoute>
        <Route path="users" component={UserList}></Route>
    </Route>
    <Route path="/sessions" component={Dashboard}></Route>
    <Route path="/settings" component={Dashboard}></Route>
    <Route path="/notifications" component={Dashboard}></Route>
  </Router>,
      document.getElementById('dashboard')
);


// TODO create sidebar component
ReactDOM.render(
  <ImportUsers />,
      document.getElementById('import-users')
);
