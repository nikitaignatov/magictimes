import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {  deleteSession } from '../actions'
import {  getNew,getCompleted } from '../reducers/sessions'
import SessionPanelList from '../components/sessions/SessionPanelList'

class SessionsContainer extends Component {
  render() {
    const { completed,new_sessions, onSessionDeleted } = this.props
    return (
      <div className="row">
        <div className="col-xs-6">
          <div>
              <h3>Not processed sessions</h3>
          </div>
          <SessionPanelList sessions={new_sessions} />
        </div>
        <div className="col-xs-6">
          <div>
              <h3>Completed</h3>
          </div>
          <SessionPanelList sessions={completed} />
        </div>
      </div>
    )
  }
}

SessionsContainer.propTypes = {
  completed: PropTypes.array.isRequired,
  new_sessions: PropTypes.array.isRequired,
  onSessionDeleted: PropTypes.func
}

function mapStateToProps(state) {
  return {
    completed: getCompleted(state),
    new_sessions:getNew(state)
  }
}

export default connect(
  mapStateToProps,
  { deleteSession }
)(SessionsContainer)
