import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { go } from '../../actions/server'
import BasicTable  from './BasicTable'
import { viewTimeReportBy } from '../../actions/session'

class Today extends Component {
  render () {
    const { today, time_report ,id,days } = this.props
    const daysOptions = [7,14,30,60,90,180,365]
    const page = (page,days) => (e) => {
      e.preventDefault()
      this.props.go(`${page}/${days}`)
      this.props.viewTimeReportBy((id || 'users').toUpperCase(),days)
    }

    return (
      <div>
        <div className="nav-tabs-custom">
          <ul className="nav nav-tabs">
            <li className={days==1?'active':''}><a href="#" onClick={page(`/reports/view/${id}`,1)} data-toggle="tab">Today</a></li>
            {daysOptions.map(day=>
              <li key={id+day} className={days==day?'active':''}><a href="#" onClick={page(`/reports/view/${id}`,day)} data-toggle="tab">{day} days</a></li>  
            )}
          </ul>
        </div>
        <div className="box-header">
          <h3>Stats for last {days} days, grouped by {id}</h3><br/>
        </div>
        <BasicTable report={time_report} />    
      </div>
    )
  }
}
export default connect(null, {viewTimeReportBy,go})(Today)
