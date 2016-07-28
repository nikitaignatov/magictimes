﻿import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { go } from '../../actions/server'


export class SideBar extends Component {
  render() {

      const page =page=> (e) => {e.preventDefault(); this.props.go(page)}
    return (
      <aside className="main-sidebar">
          <section className="sidebar">
              <div className="user-panel">
                  <div className="pull-left image">
                      <img src="/node_modules/admin-lte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                  </div>
                  <div className="pull-left info">
                      <p>Turbo Coder</p>
                      <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                  </div>
              </div>
              <form action="#" method="get" className="sidebar-form">
                  <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="TURBO Search..." />
                      <span className="input-group-btn">
                          <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                              <i className="fa fa-search"></i>
                          </button>
                      </span>
                  </div>
              </form>
              <ul className="sidebar-menu">
                  <li className="header">TURBO NAVIGATION</li>
                  <li><a href="#" onClick={page('/dashboard/')}><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                  <li><a href="#" onClick={page('/sessions/')}><i className="fa fa-list"></i> <span>Sessions</span></a></li>
                  <li><a href="#" onClick={page('/reports/')}><i className="fa fa-list"></i> <span>Reports</span></a></li>
                  <li><a href="#" onClick={page('/working-hours/')}><i className="fa fa-hourglass-half"></i> <span>Working hours</span></a></li>
                  <li><a href="#" onClick={page('/settings/')}><i className="fa fa-cog"></i> <span>Settings</span></a></li>
              </ul>
          </section>
      </aside>
    )
  }
}

export default connect(
  null,
  {go}
)(SideBar)
