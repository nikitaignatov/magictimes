import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SessionList from '../components/sessions/SessionList'

class SessionsContainer extends Component {
  render() {
    const { sessions,id } = this.props
    console.log('SESSION ID:' ,id)
    return (
      <div>
        <div className="row">
            <div className="col-md-12">
              <SessionList selected={id} sessions={sessions} />
            </div>
        </div>
      </div>
    )
  }
}

SessionsContainer.propTypes = {
  sessions: PropTypes.array.isRequired
}

function mapStateToProps(state, props) {
  console.log('PP',props.location)
  return {
    sessions: state.sessions,
    id: props.params.id 
  }
}

export default connect(
  mapStateToProps,
  null
)(SessionsContainer)
