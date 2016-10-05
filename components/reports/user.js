import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { go } from '../../actions/server'
import BasicTable from './BasicTable'
import { viewTimeReportBy } from '../../actions/session'
import moment from 'moment'
import Timeline from './timeline'

class User extends Component {
  render () {
    const { user, data } = this.props
    return (
    <div className="row">
      <div className="col-md-9">
        <Timeline user={user} data={data} />
      </div>
      <div className="col-md-3">
        <div className="box box-primary">
          <div className="box-body">
            <h3 className="profile-username text-center">{user.fullName}</h3>
            <p className="text-muted text-center">
              Software Engineer
            </p>
            <ul className="list-group list-group-unbordered">
              <li className="list-group-item">
                <b>Commits</b> <a className="pull-right">{data.commitsByUsername[user.username]}</a>
              </li>
              <li className="list-group-item">
                <b>Merges</b> <a className="pull-right">{data.mergesByUsername[user.username]}</a>
              </li>
              <li className="list-group-item">
                <b>Fixes</b> <a className="pull-right">{data.fixesByUsername[user.username]}</a>
              </li>
              <li className="list-group-item">
                <b>Reverts</b> <a className="pull-right">{data.revertsByUsername[user.username]}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">About Me</h3>
          </div>
          <div className="box-body">
            <strong><i className="fa fa-book margin-r-5"></i> Education</strong>
            <p className="text-muted">
              B.S. in Computer Science from the University of Tennessee at Knoxville
            </p>
            <hr/>
            <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>
            <p className="text-muted">
              Malibu, California
            </p>
            <hr/>
            <strong><i className="fa fa-pencil margin-r-5"></i> Skills</strong>
            <p>
              <span className="label label-danger">UI Design</span>
              <span className="label label-success">Coding</span>
              <span className="label label-info">Javascript</span>
              <span className="label label-warning">PHP</span>
              <span className="label label-primary">Node.js</span>
            </p>
            <hr/>
            <strong><i className="fa fa-file-text-o margin-r-5"></i> Notes</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default connect(null, {viewTimeReportBy,go})(User)
