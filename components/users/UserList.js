import React, { Component, PropTypes } from 'react'
import User from './User'
import { connect } from 'react-redux'

export default class UserList extends Component {
  render () {
    return (
    <div>
      {this.props.users.map(user => <User user={user} key={user.email} />)}
    </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}
