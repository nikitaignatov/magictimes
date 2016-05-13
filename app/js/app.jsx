
var SessionDetails = React.createClass({
    render: function () {
        var data = this.props.session.Value;
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
                <div className="box-header with-border">
                    <h3 className="box-title"><strong>{session.Value.Name}</strong></h3>
                    <div className="box-tools pull-right">
                        <span data-toggle="tooltip" title="3 New Messages" className="badge bg-green"></span>
                        <button type="button" className="btn btn-box-tool" data-widget="collapse">
                            <i className="fa fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-box-tool remove-session" data-widget="remove">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    <h3> {this.props.session.Value.Message}</h3>
                </div>
                <SessionForm magic={this.props.magic}/>
                <SessionDetails session={this.props.session}  magic={this.props.magic} />
            </div>
        );
    }
});

var SessionPanelList = React.createClass({
    render: function () {
        console.log(this.props)
   var  magic=   this.props.magic;
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
            <div>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <input type="number" ref="ticket" onChange={this.onChange} className="form-control"/>
                  </div>
              </form>
            </div>
        );
    },
    onChange: function () {
        console.log('Changing ticket')
    },
    onSubmit: function (e) {
        e.preventDefault()
        var ticket = this.refs.ticket.value.trim()

        console.log('Submitting ticket', ticket)

        this.props.magic.server.commentOn("b009a8cf-0aa6-4402-b254-6b56ee80674d", "wolla", "123123", 1)
    }
});

var Sessions = React.createClass({
    getInitialState: function () {
        return { data: [] ,magic: {} };
    },
    update: function (data) {
        this.setState({ data: data.complete });
    },
    connectToHub: function () {
        this.magic = $.connection.nfcHub;

        this.magic.client.update = this.update;

        this.setState({ magic:this.magic });
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
                <SessionPanelList data={this.state.data} magic={this.state.magic}  />
                <SessionForm magic={this.state.magic} />
            </div>
        );
    }
});


ReactDOM.render(
  <Sessions />,
      document.getElementById('missing-message')
);
