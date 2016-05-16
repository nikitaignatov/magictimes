var React = require('react');
var SessionActions = require('../../actions/SessionActions');


var SessionForm = React.createClass({
    render: function () {
        var items = []
        var session = this.props.session.Value;
        if (session.IsMissingTicket) {
            items.push(
                <div className="form-group" key={'ticket'}>
                    <input type="number" ref="ticket" className="form-control" placeholder="Tickt id" />
                </div>
            )
        } else {
            items.push(<input type="hidden" ref="ticket" value={session.Ticket} key={'ticket' } />)
        }
        if (session.IsMissingMessage) {
            items.push(
                <div className="form-group" key={'message'}>
                    <textarea type="text" ref="message" className="form-control" placeholder="Message.." />
                </div>
            )
        } else {
            items.push(<input type="hidden" ref="message" value={session.Message} key={'message' } />)
        }
        if (!session.IsValid) {
            items.push(
                <div className="box-footer" key={'submit-button'}>
                    <div className="text-right">
                        <button type="button" className="btn btn-flat" onClick={this.onSubmit}>Save</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="box-body">
                <form onSubmit={this.onSubmit}>
                    {items}

                </form>
            </div>
        );
    },
    onSubmit: function (e) {
        e.preventDefault()
        console.log('submitski')
        var session = this.props.session;
        var ticket = this.refs.ticket.value.trim()
        var message = this.refs.message.value.trim()
        SessionActions.update(session.Value.Transaction.TransactionId, message, ticket, 1)
    }
});

module.exports = SessionForm;