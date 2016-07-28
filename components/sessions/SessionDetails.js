import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewSession } from '../../actions/session'
import moment from 'moment'

export class SessionDetails extends Component {
  render () {
    // var project = this.props.project
    // var issue = this.props.issue
    var data = this.props.session

    const start = moment(data.startTime, moment.ISO_8601).format('HH:mm')
    const end = (moment(data.endTime, moment.ISO_8601) || Date.now()).format('HH:mm')
    const duration = moment.duration(data.duration).humanize()

    return (
    <tr onClick={e => this.props.viewSession(data.id)}>
      <td className="tracker-td-duration">
        <a href="/poop" target="_blank"><span className="label label-info" style={{color:'#f00'}}>{data.issue}</span></a>
      </td>
      <td className="tracker-task">
        <strong style={{'white-space': 'pre-line'}}>{data.log}</strong>
        <p className="text-muted">
          <a href="/poop" target="_blank"><span className="">{data.issueData.name}</span></a>
        </p>
      </td>
      <td className="tracker-time">
        <small className="ng-binding text-muted">{start} - {end}</small>
      </td>
      <td className="tracker-td-duration">
        {duration}
      </td>
    </tr>
    )
  }
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

export default connect(
  mapStateToProps,
  {viewSession}
)(SessionDetails)
