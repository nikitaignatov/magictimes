import React, { Component } from 'react'
import { connect } from 'react-redux'
﻿import IndicatorBox from '../layout/IndicatorBox'

export default class SessionDetails extends Component {
  render() {
    const { dashboard } = this.props
    var hours = moment.duration(dashboard.total_minutes, 'minute').humanize()
    return (
        <div className="row">
            <div className="col-lg-3 col-xs-6">
              <IndicatorBox title="Total time" value={hours} icon="dashboard" color="aqua" />
            </div>
            <div className="col-lg-3 col-xs-6">
              <IndicatorBox title="Total sessions" value={dashboard.total_questions} icon="comment" color="aqua" />
            </div>
            <div className="col-lg-3 col-xs-6">
              <IndicatorBox title="Total questions" value={dashboard.total_sessions} icon="question" color="aqua" />
            </div>
            <div className="col-lg-3 col-xs-6">
              <IndicatorBox title="Total Tickets" value="0" icon="ticket" color="aqua" />
            </div>
        </div>
    )
  }
}
