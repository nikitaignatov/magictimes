import React, { Component,PropTypes } from 'react'

export default class SessionForm extends Component {
    render () {
        const { onSaveSessionClicked, onSubmitSessionClicked } = this.props
        const session = this.props.session.Value
        var items = []
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
                        <button type="button" className="btn btn-flat" onClick={onSaveSessionClicked}>Save</button>
                    </div>
                </div>
            )
        } else if (!session.IsSubmitted) {

            items.push(
                <div className="box-footer" key={'submit-button'}>
                    <div className="text-right">
                        <button type="submit" className="btn btn-info btn-flat" onClick={onSubmitSessionClicked}>Submit</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="box-body">
                <form>{items}</form>
            </div>
        );
    }
    onSubmit (e) {
        e.preventDefault()
        var session = this.props.session;
        var ticket = this.refs.ticket.value.trim()
        var message = this.refs.message.value.trim()

        SessionActions.update(session.Value.Transaction.TransactionId, message, ticket, 1)
    }
    onSubmitEntry (e) {
        e.preventDefault()
        var session = this.props.session;
        SessionActions.submitEntry(session.Key)
    }
}

SessionForm.propTypes = {
  session: PropTypes.object,
  onSaveSessionClicked: PropTypes.func,
  onSubmitSessionClicked: PropTypes.func
}
