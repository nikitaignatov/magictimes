import React, { Component, PropTypes} from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="index2.html" className="logo">
          <span className="logo-mini"><b>A</b>TT</span>
          <span className="logo-lg"><b>Magic</b>TIMES</span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
        </nav>
      </header>
    )
  }
}
