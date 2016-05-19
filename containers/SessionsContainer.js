import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {  deleteSession,updateSession,submitTime } from '../actions'
import {  getSessions } from '../reducers/sessions'
import SessionPanelList from '../components/sessions/SessionPanelList'

class SessionsContainer extends Component {
  render() {
    const { sessions, deleteSession,updateSession,submitTime } = this.props
    const data = [
      { title:'Not processed sessions',  sessions:sessions.new_sessions},
      { title:'Ready to submit',         sessions:sessions.ready_to_submit},
      { title:'Complete',                sessions:sessions.complete},
    ]
    return (
      <div className="row">
        {data.map(item =>
          <div className="col-xs-4">
            <SessionPanelList
              title={item.title}
              sessions={item.sessions}
              onSessionDeleted={deleteSession}
              onSaveSessionClicked={updateSession}
              onSubmitSessionClicked={submitTime} />
          </div>
        )}
      </div>
    )
  }
}

SessionsContainer.propTypes = {
  sessions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    sessions: getSessions(state)
  }
}

export default connect(
  mapStateToProps,
  { deleteSession, updateSession ,submitTime }
)(SessionsContainer)
