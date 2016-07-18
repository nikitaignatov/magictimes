import React, { Component, PropTypes } from 'react'

export default class User extends Component {
  render () {
    var data = this.props.user;
    return (
      <div className="box box-widget widget-user">
        <div className="widget-user-header">
          <h3 className="widget-user-username">{data.username}</h3>
          <h5 className="widget-user-desc">Lead Developer</h5>
          <h5 className="widget-user-desc">{data.email}</h5>
        </div>        
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}
