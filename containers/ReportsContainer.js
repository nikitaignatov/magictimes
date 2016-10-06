import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Today from '../components/reports/today'
import { viewTimeReportBy } from '../actions/session'

class ReportsContainer extends Component {
  
  render () {
    const { today,time_report,viewTimeReportBy,period} = this.props
    console.log('--->',this.props)
    // viewTimeReportBy((this.props.params.id||'users').toUpperCase())
    return (
    <div className="box">
      <Today today={today} time_report={time_report} id={this.props.params.id} period={period} />
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    period: state.server.period,
    today: state.reports.today,
    time_report: state.reports.time_report,
  }
}

export default connect(
  mapStateToProps,
  {viewTimeReportBy}
)(ReportsContainer)
