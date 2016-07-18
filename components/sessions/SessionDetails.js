import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewSession } from '../../actions/session'

export class SessionDetails extends Component {
  render () {
    var data = this.props.session

    data.start = moment(data.startTime, moment.ISO_8601).format('HH:mm')
    data.end = (moment(data.endTime, moment.ISO_8601) || Date.now()).format('HH:mm')
    data.duration = moment.duration(data.duration).humanize()

    return (
    <tr onClick={e => this.props.viewSession(data.id)}>
      <td class="tracker-td-duration">
        <button className="btn default dropdown-toggle btn-menu">
          <i className="fa fa-ellipsis-v"></i>
        </button>
      </td>
      <td class="text-muted tracker-task">
        {data.log}
      </td>
      <td class="tracker-time">
        <small class="ng-binding text-muted">{data.start} - {data.end}</small>
      </td>
      <td class="tracker-td-duration">
        {data.duration}
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
