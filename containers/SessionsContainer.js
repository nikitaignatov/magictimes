import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {  deleteSession,updateSession,submitTime } from '../actions'
import {  getSessions } from '../reducers/sessions'
import SessionPanelList from '../components/sessions/SessionPanelList'

class SessionsContainer extends Component {
  render() {
    const { sessions, deleteSession,updateSession,submitTime } = this.props
    console.log('asdasd',sessions)
    return (
      <div className="row">
        <div className="col-xs-4">
          <SessionPanelList title={'Not processed sessions'} sessions={sessions.new_sessions} onSessionDeleted={deleteSession} onSaveSessionClicked={updateSession} onSubmitSessionClicked={submitTime} />
        </div>
        <div className="col-xs-4">
          <SessionPanelList title={'ready to submit'} sessions={sessions.ready_to_submit} onSessionDeleted={deleteSession} onSaveSessionClicked={updateSession} onSubmitSessionClicked={submitTime}/>
        </div>
        <div className="col-xs-4">
          <SessionPanelList title={'Completed'} sessions={sessions.complete} onSessionDeleted={deleteSession} onSaveSessionClicked={updateSession} onSubmitSessionClicked={submitTime}/>
        </div>
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
