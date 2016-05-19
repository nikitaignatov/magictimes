import React, { Component, PropTypes } from 'react'
import SessionPanel from './SessionPanel'

export default class SessionPanelList extends Component {
    render() {
      const { title, onSessionDeleted,onSaveSessionClicked} = this.props
      return (
        <div>
          <div>
              <h3>{title}</h3>
          </div>
          {this.props.sessions.map(
          session => <SessionPanel
                        session={session}
                        onSessionDeleted={onSessionDeleted}
                        onSaveSessionClicked={onSaveSessionClicked}
                        key={session.Key} />)}
        </div>
      )
    }
}

SessionPanelList.propTypes = {
  sessions: PropTypes.array.isRequired,
  onSaveSessionClicked: PropTypes.func.isRequired,
  onSessionDeleted: PropTypes.func.isRequired
}
