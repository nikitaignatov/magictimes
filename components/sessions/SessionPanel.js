import React, { Component, PropTypes } from 'react'
import PanelHeader from './PanelHeader'
import { connect } from 'react-redux'
import { routeActions, push } from 'react-router-redux'
import { deleteSession, startSession } from '../../actions/session'
import { Field, Form, actions, track } from 'react-redux-form'
import { TransitionView, Calendar, DateField } from 'react-date-picker'

export class SessionPanel extends Component {
  render () {
    const { session, dispatch, push, deleteSession, startSession} = this.props
    const key = (k) => track(`sessions[]${k}`, (s) => s.id === session.id)

    return (
    <tr className="warning">
      <td colSpan="4">
        <Form model={key('')}>
          <div className="form-group">
            <Field model={key('log')}>
              <label>
                Describe the task that you are logging
              </label>
              <textarea className="form-control" placeholder="Message.." />
            </Field>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <DateField
                forceValidDate
                dateFormat="YYYY-MM-DD HH:mm"
                defaultValue={'2016-08-08 22:12'}
                onChange={(dateString, { dateMoment, timestamp}) => {
                            console.log('SELECT:', dateString, dateMoment, timestamp)}} />
            </div>
            <div className="form-group col-md-6">
              <DateField
                forceValidDate
                dateFormat="YYYY-MM-DD HH:mm"
                defaultValue={'2016-08-08 22:12'}
                onChange={(dateString, { dateMoment, timestamp}) => {
                            console.log('SELECT:', dateString, dateMoment, timestamp)}} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <Field model={key('startTime')} parser={this.formatDate}>
                <input type="text" className="form-control" placeholder="start time" />
              </Field>
            </div>
            <div className="form-group col-md-4">
              <Field model="sessionView.endTime">
                <input type="time" className="form-control" placeholder="end time" />
              </Field>
            </div>
            <div className="form-group col-md-4">
              <Field model="sessionView.ticket">
                <input type="text" className="form-control" placeholder="Tickt id" />
              </Field>
            </div>
          </div>
          <button type="submit" className="btn btn-info btn-lg">
            save changes
          </button>
          <span className="btn btn-link btn-lg" onClick={e => push('/sessions/')}>cancel</span>
          <button type="button" className="btn btn-link btn-lg  pull-right" onClick={e => deleteSession(session.id)}>
            <span className="text-danger">delete</span>
          </button>
        </Form>
      </td>
    </tr>
    )
  }
}

export default connect(
  null,
  {push,deleteSession,startSession}
)(SessionPanel)
