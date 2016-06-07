import React, { Component, PropTypes } from 'react'

export default class User extends Component {
  render () {
    var data = this.props.user;
    return (
      <div className="box box-widget widget-user">
        <div className="widget-user-header">
          <h3 className="widget-user-username">{data.Name}</h3>
          <h5 className="widget-user-desc">Lead Developer</h5>
          <h5 className="widget-user-desc">{data.Email}</h5>
        </div>
        <div className="box-footer no-padding">
          <ul className="nav nav-stacked">
            {data.Cards.map(card => <li key={card}><a href={'#/sessions?filter-bycard='+card}>{card} <span className="pull-right btn btn-danger btn-xs">remove</span></a></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}
