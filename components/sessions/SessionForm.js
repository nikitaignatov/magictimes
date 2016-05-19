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
                        <button type="button" className="btn btn-flat" onClick={(e)=>{
                          var data = {
                            id : this.props.session.Key,
                            message:this.refs.message.value,
                            ticket:this.refs.ticket.value,
                            type:1
                          }
                          onSaveSessionClicked(data)
                          }}>Save</button>
                    </div>
                </div>
            )
        } else if (!session.IsSubmitted) {
            items.push(
                <div className="box-footer" key={'submit-button'}>
                    <div className="text-right">
                        <button type="button" className="btn btn-info btn-flat" onClick={(e)=> onSubmitSessionClicked(this.props.session.Key)}>Submit</button>
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
}

SessionForm.propTypes = {
  session: PropTypes.object,
  onSaveSessionClicked: PropTypes.func,
  onSubmitSessionClicked: PropTypes.func
}
