import React, { Component, PropTypes } from 'react'
import SessionPanel from './SessionPanel'

export default class SessionPanelList extends Component {
    render() {
      return (<div>{this.props.sessions.map(
        session => <SessionPanel session={session} key={session.Key} />
    )}</div>)
    }
}
