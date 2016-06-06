import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import UserList from '../components/users/UserList'

class UsersContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-12">
              <UserList users={this.props.users} />
            </div>
        </div>
      </div>
    )
  }
}

UsersContainer.propTypes = {
  users: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  console.log('USERS-> ',state)
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UsersContainer)
