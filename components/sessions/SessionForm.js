import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, addArrayValue } from 'redux-form'
import {  updateSession, submitTime } from '../../actions/session'

export const fields = [
  'id',
  'message',
  'ticket',
  'type'
]

export default class SessionForm extends Component {
  saveSession (e){
    this.props.updateSession({
      id : this.props.session.Key,
      message: this.refs.message.value,
      ticket: this.refs.ticket.value,
      type: 1
    })
  }

  render () {
    const {  updateSession, submitTime, handleSubmit } = this.props
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
                    <button type="button" className="btn btn-flat" onClick={(e)=>{this.saveSession(e)}}>Save</button>
                </div>
            </div>
        )
    }
    return (
        <div className="box-body">
            <form onSubmit={handleSubmit(this.saveSession.bind(this))}>{items}</form>
        </div>
    );
  }
}

SessionForm.propTypes = {
  session: PropTypes.object,
  fields: PropTypes.object.isRequired,
  updateSession: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'session',
  fields
}, state => ({ initialValues: state.session }),{updateSession,submitTime})
(SessionForm)
