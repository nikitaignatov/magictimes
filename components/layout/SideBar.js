﻿import React, { Component, PropTypes} from 'react'

export default class Header extends Component {
  render() {
    return (
      <aside className="main-sidebar">
          <section className="sidebar">
              <div className="user-panel">
                  <div className="pull-left image">
                      <img src="../node_modules/admin-lte/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
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
                  <li id="import-users"></li>
                  <li className="treeview">
                      <a href="#">
                          <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
                      </a>
                      <ul className="treeview-menu">
                          <li><a href="../index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                      </ul>
                  </li>
                  <li><a href="#/"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                  <li><a href="#/settings"><i className="fa fa-cog"></i> <span>Settings</span></a></li>

              </ul>
          </section>
      </aside>
    )
  }
}
