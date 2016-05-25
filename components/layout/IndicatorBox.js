import React, { Component, PropTypes} from 'react'

export default class IndicatorBox extends Component {
  render() {
    const { value, title, icon, color} = this.props
    return (
      <div className={'small-box bg-'+color}>
          <div className="inner">
              <h3>{value}</h3>
              <p>{title}</p>
          </div>
          <div className="icon">
              <i className={'fa fa-'+icon}></i>
          </div>
      </div>
    )
  }
}
