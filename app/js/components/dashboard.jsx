var React = require('react');
var Sessions = require('./sessions');

var Dashboard = React.createClass({
    getInitialState: function () {
        return { data: { new_sessions: [], ready_to_submit: [], complete: [],users:[] }, magic: {} };
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