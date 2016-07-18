import React, { Component, PropTypes } from 'react'
import PanelHeader from './PanelHeader'
import SessionForm from './SessionForm'
import SessionSubmitForm from './SessionSubmitForm'
import SessionDetails from './SessionDetails'
import { connect } from 'react-redux'
import { routeActions, push } from 'react-router-redux'


export class SessionPanel extends Component {
  render () {
    const { session ,dispatch,push} = this.props
    return (
    <tr className="warning">
      <td colSpan="4">
        <div className="form-group" key={'message'}>
        <label>Describe the task that you are logging
          </label>
          <textarea
            type="text"
            ref="comment"
            className="form-control"
            placeholder="Message..">
            {session.log}
          </textarea>
        </div>
        <div className="form-group" key={'ticket'}>
          <input
            type="number"
            ref="ticket"
            className="form-control"
            placeholder="Tickt id"
            value={session.ticket} />
        </div>
        <button className="btn btn-info btn-lg dropdown-toggle btn-menu">
          save changes
        </button>
        <button className="btn btn-link btn-lg dropdown-toggle btn-menu" onClick={e=>this.dispatch(push('/sessions/'))}>
          cancel
        </button>
      </td>
    </tr>
    )
  }
}

SessionPanel.propTypes = {
  session: PropTypes.object
}

export default connect(
  null,
  {push}
)(SessionPanel)
