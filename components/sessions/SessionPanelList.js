import React, { Component, PropTypes } from 'react'
import SessionPanel from './SessionPanel'

export default class SessionPanelList extends Component {
    render() {
      const {onSessionDeleted} = this.props
      return (<div>{this.props.sessions.map(
        session => <SessionPanel session={session} onSessionDeleted={onSessionDeleted} key={session.Key} />
    )}</div>)
    }
}

SessionPanelList.propTypes = {
  sessions: PropTypes.array.isRequired,
  onSessionDeleted: PropTypes.func.isRequired
}
