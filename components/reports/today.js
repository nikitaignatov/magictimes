import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { go } from '../../actions/server'
import BasicTable  from './BasicTable'
import { viewTimeReportBy } from '../../actions/session'

class Today extends Component {
  render () {
    const { today, time_report ,id,period } = this.props
    const page = (page) => (e) => {
      e.preventDefault()
      this.props.go(`${page}`)
      this.props.viewTimeReportBy((id || 'users').toUpperCase(),period)
    }

    return (
      <div>
        <div className="box-header">
          <h3>Stats for <strong className="bg-warning">[{period.start} / {period.end}]</strong> grouped by <strong className="bg-warning">[{id}]</strong></h3><br/>
        </div>
        <BasicTable report={time_report} />    
      </div>
    )
  }
}
export default connect(null, {viewTimeReportBy,go})(Today)
