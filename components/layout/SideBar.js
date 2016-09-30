import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { go } from '../../actions/server'

import { viewTimeReportBy } from '../../actions/session'

export class SideBar extends Component {
  render() {
    const {users,period}=this.props
    const page =(view)=> (e) => {
        e.preventDefault(); 
        const days= 7;
        this.props.viewTimeReportBy((view||'users').toUpperCase(),days);
        this.props.go(`/period/${period.start}/${period.end}/reports/view/${view}/${days}`);
    }
    const profile =(view)=> (e) => {
        e.preventDefault(); 
        this.props.go(`/period/${period.start}/${period.end}/user/${view}`);
    }
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
                  <li className="header">REPORTS</li>
                  <li><a href="#" onClick={page('users')}><i className="fa fa-user"></i> <span>Users</span></a></li>
                  <li><a href="#" onClick={page('projects')}><i className="fa fa-list"></i> <span>Projects</span></a></li>
                  <li><a href="#" onClick={page('issues')}><i className="fa fa-money"></i> <span>Issues</span></a></li>
                  <li><a href="#" onClick={page('months')}><i className="fa fa-calendar"></i> <span>Month</span></a></li>
                  <li className="treeview active">
                        <a href="#">
                            <i className="fa fa-users"></i>
                            <span>Users</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu menu-open">
                        {users.map(user=>                        
                            <li><a href="#" onClick={profile(user.username)}><i className="fa fa-user"></i> {user.fullName}</a></li>
                        )}
                        </ul>
                    </li>
              </ul>
          </section>
      </aside>
    )
  }
}

function mapStateToProps (state) {
  return {
    period: state.server.period,
  }
}

export default connect(
  mapStateToProps,
  {go,viewTimeReportBy}
)(SideBar)
