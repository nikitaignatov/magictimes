import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import User from '../components/reports/user'
import { viewTimeReportBy } from '../actions/session'

class UserContainer extends Component {

  render () {
    const { data } = this.props
    const { id } = this.props.params
    const user = data.users.find(x => x.username == id) || {}
    return (
    <div>
      <User user={user} data={data} id={this.props.params.id} />
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.reports.data
  }
}

export default connect(
  mapStateToProps,
  {viewTimeReportBy}
)(UserContainer)
