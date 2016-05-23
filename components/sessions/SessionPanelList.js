import React, { Component, PropTypes } from 'react'
import SessionPanel from './SessionPanel'

export default class SessionPanelList extends Component {
    render() {
      const { title, type } = this.props
      return (
        <div>
          <div>
              <h3>{title}</h3>
          </div>
          {this.props.sessions.map(
          session => <SessionPanel
                        session={session}
                        type={type}
                        key={session.Key} />)}
        </div>
      )
    }
}

SessionPanelList.propTypes = {
  sessions: PropTypes.array.isRequired
}
