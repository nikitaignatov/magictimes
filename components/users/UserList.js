import React, { Component, PropTypes } from 'react'
import User from './User'
import { connect } from 'react-redux'
import {  importUsers } from '../../actions'

export default class UserList extends Component {
  render() {
    return (
      <div>
        <div><button className="btn btn-info" onClick={e=>this.props.importUsers()}>Import users</button></div>
        {this.props.users.map(user => <User user={user} key={user.Email} />)}
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps, {importUsers})(UserList)
