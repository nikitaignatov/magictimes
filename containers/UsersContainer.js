import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { users } from '../reducers/users'
import UserList from '../components/users/UserList'

class UsersContainer extends Component {
  render() {
    console.log(this.props)
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
  return {
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  null
)(UsersContainer)
