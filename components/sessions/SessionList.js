import React, { Component, PropTypes } from 'react'
import SessionPanel from './SessionPanel'
import SessionDetails from './SessionDetails'
import Creator from './Creator'
import { connect } from 'react-redux'


export class SessionList extends Component {
  render () {
    const { sessions, selected } = this.props

    const print = session => session.id == selected ?
      <SessionPanel session={session} key={session.id} /> :
      <SessionDetails session={session} key={session.id} />
    return (
    <div>
      <div>
        <h3>Sessions Today</h3>
      </div>
      <div className="box box-default">
        <Creator />
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-sm-1">
                action
              </th>
              <th className="col-sm-8">
                task
              </th>
              <th className="col-sm-2">
                period
              </th>
              <th className="col-sm-1">
                duration
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(session => print(session))}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

SessionList.propTypes = {
  sessions: PropTypes.array.isRequired
}

export default connect(null,
  { }
)(SessionList)
