var React = require('react');
var SessionStore = require('../../stores/SessionStore');
var SessionForm = require('./SessionForm');

var PanelHeader = React.createClass({
    render: function () {
        var data = this.props.session.Value;
        return (
            <div className="box-header with-border">
                <h3 className="box-title"><strong>{data.Name}</strong></h3>
                <div className="box-tools pull-right">
                    <span data-toggle="tooltip" title="3 New Messages" className="badge bg-green"></span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <i className="fa fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-box-tool remove-session" data-widget="remove" onClick={this.deleteSession}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
        );
    },
    deleteSession: function (e) {
        this.props.deleteSession(this.props.session.Key)
    }
});

var SessionPanelList = React.createClass({
    render: function () {
        var magic = this.props.magic;
        var sessions = this.props.data.map(function (session) {
            return (
              <SessionPanel session={session} key={session.Key} magic={magic} />
          );
        });
        return (<div className="col-xs-12">{sessions}</div>);
    }
});

var SessionDetails = React.createClass({
    render: function () {
        var data = this.props.session.Value;
        data.Start = moment(data.Transaction.Started, moment.ISO_8601).fromNow()
        data.End = moment(data.Transaction.Ended, moment.ISO_8601).fromNow()
        data.Duration = moment.duration(data.Transaction.Duration).humanize()
        return (
            <table className="table text-muted table-striped table-hover">
               <tbody>
                    <tr><td>Duration</td><th>{data.Duration}</th></tr>
                    <tr><td>Started</td><td>{data.Start}</td></tr>
                    <tr><td>Ended</td><td>{data.End}</td></tr>
                    <tr><td>Ticket</td><td>{data.Ticket}</td></tr>
                    <tr><td>TimeEntryId</td><td>{data.TimeEntryId}</td></tr>
                    <tr><td>Tx</td><td>{data.Transaction.TransactionId}</td></tr>
               </tbody>
            </table>
        );
    }
});

var SessionPanel = React.createClass({
    render: function () {
        var session = this.props.session;
        return (
            <div className="box box-info">
                <PanelHeader session={session} deleteSession={this.props.magic.server.remove} />
                <div className="box-body">
                    <h3> {this.props.session.Value.Message}</h3>
                </div>
                <SessionForm session={this.props.session} commentOn={this.props.magic.server.commentOn} />
                <SessionDetails session={this.props.session} />
            </div>
        );
    }
});

var Sessions = React.createClass({
    render: function () {
        return (
            <div>
                <SessionPanelList data={this.props.data} magic={this.props.magic} />
            </div>
        );
    }
});


function getTodoState() {
    return {
        data: SessionStore.getAll(),
        magic: SessionStore.getHub()
    };
}

var Dashboard = React.createClass({
    getInitialState: function () {
        return getTodoState();
    },
    onChange: function () {
        this.setState(getTodoState());
    },
    componentDidMount: function () {
        SessionStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        SessionStore.removeChangeListener(this.onChange);
    },
    update: function (data) {
        this.setState({ data: data });
    },
    render: function () {
        console.log('dash', this.state)
        return (
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <h3>Not processed sessions</h3>
                    </div>
                    <section className="row" id="missing-message">
                            <Sessions data={this.state.data.new_sessions} magic={this.state.magic} />
                    </section>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <h3>Ready to be submitted</h3>
                    </div>
                    <section className="row" id="missing-ticket">
                            <Sessions data={this.state.data.ready_to_submit} magic={this.state.magic} />
                    </section>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <h3>Submitted</h3>
                    </div>
                    <section clasName="row" id="complete">
                            <Sessions data={this.state.data.complete} magic={this.state.magic} />
                    </section>
                </div>
            <div>
            </div>
            </div>
        );
    }
});


module.exports = Dashboard;