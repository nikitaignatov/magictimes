import React, { Component, PropTypes } from 'react'
import User from './User'
import { connect } from 'react-redux'

export default class UserList extends Component {
  render() {
    console.log('STATE3',this.props)
    return (
      <div>
        {this.props.users.map(user => <User user={user} key={user.Email} />)}
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}
