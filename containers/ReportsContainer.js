import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SessionList from '../components/sessions/SessionList'
import SessionDashboard from '../components/sessions/SessionDashboard'
import Today from '../components/reports/today'

class SessionsContainer extends Component {
  render () {
    const { today} = this.props
    return (
    <div className="box">
      <Today today={today} />
    </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('asdasd', state)
  return {
    today: state.reports.today,
  }
}

export default connect(
  mapStateToProps,
  null
)(SessionsContainer)
