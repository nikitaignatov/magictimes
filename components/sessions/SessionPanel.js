import React, { Component,PropTypes } from 'react'
import PanelHeader from './PanelHeader'
import SessionForm from './SessionForm'
﻿import SessionDetails from './SessionDetails'

export default class SessionPanel extends Component {
    render() {
        const { onSaveSessionClicked, onSubmitSessionClicked, onSessionDeleted,type } = this.props
        var session = this.props.session
        return (
          <div className={'box box-' + type}>
                <PanelHeader session={session} onSessionDeleted={onSessionDeleted} />
                <div className="box-body">
                    <h3> {session.Value.Message}</h3>
                </div>
                <SessionForm
                  session={session}
                  onSaveSessionClicked={onSaveSessionClicked}
                  onSubmitSessionClicked={onSubmitSessionClicked}
                   />
                <SessionDetails session={session} />
            </div>
        )
    }
}

SessionPanel.propTypes = {
  session: PropTypes.object,
  onSaveSessionClicked: PropTypes.func,
  onSubmitSessionClicked: PropTypes.func.isRequired,
  onSessionDeleted: PropTypes.func.isRequired
}
