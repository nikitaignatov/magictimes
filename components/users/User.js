import React, { Component, PropTypes } from 'react'

export default class User extends Component {
  render () {
    var data = this.props.user;
    return (
      <div className="box box-info">
        <div className="box-body">
          <h3> {data.Name}</h3>
          <p> <a href="">{data.Username}</a></p>
          <p> <a href={'mailto:'+data.Email}>{data.Email}</a></p>
          <ul>
            {data.Cards.map(card => <li>{card}</li>)}
          </ul>
          <button>Add card</button>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}
