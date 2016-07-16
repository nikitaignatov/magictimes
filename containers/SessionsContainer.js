import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SessionPanelList from '../components/sessions/SessionPanelList'
import SessionDashboard from '../components/sessions/SessionDashboard'

class SessionsContainer extends Component {
  render() {
    const { sessions,settings,dashboard } = this.props
    const data = [
      { type:'warning', title:'Not processed sessions',  sessions:sessions.new_sessions},
      { type:'info', title:'Ready to submit', sessions:sessions.ready_to_submit},
      { type:'success', title:'Complete', sessions:sessions.complete},
    ]
    return (
      <div>
        <SessionDashboard dashboard={dashboard}/>
        <div className="row">
          {data.map(item =>
            <div className="col-sm-12 col-md-4" key={item.title}>
              <SessionPanelList
                title={item.title}
                type={item.type}
                sessions={item.sessions} />
            </div>
          )}
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
    dashboard:state.sessions.dashboard,
    sessions: state.sessions,
    id: props.params.id 
  }
}

export default connect(
  mapStateToProps,
  null
)(SessionsContainer)
