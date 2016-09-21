import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SessionList from '../components/sessions/SessionList'
import SessionDashboard from '../components/sessions/SessionDashboard'
import Today from '../components/reports/today'

class SessionsContainer extends Component {
  render () {
    const { today,time_report} = this.props
    return (
    <div className="box">
      <Today today={today} time_report={time_report}/>
    </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('asdasd', state)
  return {
    today: state.reports.today,
    time_report: state.reports.time_report,
  }
}

export default connect(
  mapStateToProps,
  null
)(SessionsContainer)
