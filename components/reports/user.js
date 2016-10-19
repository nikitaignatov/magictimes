import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { go } from '../../actions/server'
import BasicTable from './BasicTable'
import { viewTimeReportBy } from '../../actions/session'
import moment from 'moment'
import Timeline from './timeline'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart,Area, Line, ReferenceLine, ResponsiveContainer,ComposedChart } from 'recharts'

class TinyBarChart extends Component {
  render () {
    var {data} = this.props
    const style = {
      top: 0,
      left: 350,
      lineHeight: '24px'
    }

    return (

    <ResponsiveContainer height={100}>
      <BarChart data={data}>
        <XAxis hide={true} dataKey="day" />
        <ReferenceLine
          y={7.5}
          label="Max"
          stroke="red"
          strokeDasharray="3 3" />
        <Tooltip/>
        <Bar dataKey="hours" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    )
  }
}
class MonthlyBarChart extends Component {
  render () {
    var {data} = this.props
    return (
      <ResponsiveContainer height={80}>
        <ComposedChart data={data}>
          <XAxis hide={true} dataKey="month" />
          <Tooltip />
          <Bar dataKey="count" fill="#82ca9d" />
          
        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}

class User extends Component {
  render () {
    const { user, data } = this.props
    return (
    <div className="row">
      <div className="col-md-9">
        <Timeline user={user} data={data}>
          <TinyBarChart data={user.hours} />
        </Timeline>
      </div>
      <div className="col-md-3">
        <div className="box box-primary">
          <div className="box-body">
            <h3 className="profile-username text-center">{user.fullName}</h3>
            <p className="text-muted text-center">
              Software Engineer
            </p>
            <ul className="list-group list-group-unbordered">
              {user.metrics.map(metric => {
                 return <li className="list-group-item">
                          <b>{metric.name}</b>
                          <a className="pull-right">
                            {metric.value.Fields[0]}
                          </a>
                          <MonthlyBarChart data={metric.monthly} />
                        </li>
               })}
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
