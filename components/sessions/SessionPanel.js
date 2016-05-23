import React, { Component,PropTypes } from 'react'
import PanelHeader from './PanelHeader'
import SessionForm from './SessionForm'
﻿import SessionDetails from './SessionDetails'

export default class SessionPanel extends Component {
    render() {
        const { session,type } = this.props
        return (
          <div className={'box box-' + type}>
                <PanelHeader session={session} />
                <div className="box-body">
                    <h3> {session.Value.Message}</h3>
                </div>
                <SessionForm session={session} />
                <SessionDetails session={session} />
            </div>
        )
    }
}

SessionPanel.propTypes = {
  session: PropTypes.object
}
