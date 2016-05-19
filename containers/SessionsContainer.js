import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {  deleteSession,updateSession } from '../actions'
import {  getNew,getCompleted } from '../reducers/sessions'
import SessionPanelList from '../components/sessions/SessionPanelList'

class SessionsContainer extends Component {
  render() {
    const { completed,new_sessions, deleteSession,updateSession } = this.props
    return (
      <div className="row">
        <div className="col-xs-6">
          <SessionPanelList title={'Not processed sessions'} sessions={new_sessions} onSessionDeleted={deleteSession} onSaveSessionClicked={updateSession}  />
        </div>
        <div className="col-xs-6">
          <SessionPanelList title={'Completed'} sessions={completed} onSessionDeleted={deleteSession} onSaveSessionClicked={updateSession} />
        </div>
      </div>
    )
  }
}

SessionsContainer.propTypes = {
  completed: PropTypes.array.isRequired,
  new_sessions: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    completed: getCompleted(state),
    new_sessions:getNew(state)
  }
}

export default connect(
  mapStateToProps,
  { deleteSession,updateSession }
)(SessionsContainer)
