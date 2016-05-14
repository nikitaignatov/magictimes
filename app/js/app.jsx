
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

var SessionPanelList = React.createClass({
    render: function () {
        console.log(this.props)
        var magic = this.props.magic;
        var sessions = this.props.data.map(function (session) {
            return (
              <SessionPanel session={session} key={session.Key} magic={magic} />
          );
        });
        return (
            <div className="col-xs-12">
                {sessions}
            </div>
        );
    }
});

var SessionForm = React.createClass({
    render: function () {
        return (
            <div className="box-body">
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <input type="number" ref="ticket" className="form-control" placeholder="Tickt id" />
                  </div>
                  <div className="form-group">
                      <textarea type="text" ref="message" className="form-control" placeholder="Message.." />
                  </div>
              </form>
            </div>
        );
    },
    onSubmit: function (e) {
        e.preventDefault()
        var session = this.props.session;
        var ticket = this.refs.ticket.value.trim()
        var message = this.refs.message.value.trim()

        this.props.commentOn(session.Value.Transaction.TransactionId, message, ticket, 1)
    }
});

var Sessions = React.createClass({
    getInitialState: function () {
        return { data: [], magic: {} };
    },
    update: function (data) {
        this.setState({ data: data.complete });
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
        return (
            <div>
                <SessionPanelList data={this.state.data} magic={this.state.magic} />
            </div>
        );
    }
});

var Dashboard = React.createClass({
    getInitialState: function () {
        return { data: { new_sessions: [], ready_to_submit: [], complete: [] }, magic: {} };
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
        return (
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <h3>Not processed sessions</h3>
                    </div>
                    <section className="row" id="missing-message">
                            <SessionPanelList data={this.state.data.new_sessions} magic={this.state.magic} />
                    </section>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <h3>Ready to be submitted</h3>
                    </div>
                    <section className="row" id="missing-ticket">
                            <SessionPanelList data={this.state.data.ready_to_submit} magic={this.state.magic} />
                    </section>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div>
                        <h3>Submitted</h3>
                    </div>
                    <section clasName="row" id="complete">
                            <SessionPanelList data={this.state.data.complete} magic={this.state.magic} />
                    </section>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
  <Dashboard />,
      document.getElementById('dashboard')
);
