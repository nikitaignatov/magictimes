import React, { Component, PropTypes} from 'react'

export default class Header extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.0.1
        </div>
        <strong>GLHF</strong>
      </footer>
    )
  }
}
