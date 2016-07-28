import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, Form,actions } from 'react-redux-form'
import { startSession } from '../../actions/session'

export class Creator extends Component {
  
  render () {
    const {  startSession } = this.props
    return (
    <div className="box-body">
      <Form model="sessionCreator" onSubmit={(d)=>console.info('submit',d,startSession(d))}>
        <Field model="sessionCreator.log">
          <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="What are you doing" />
            <span className="input-group-btn"><button type="submit" className="btn btn-info btn-flat"> create new </button></span>
          </div>
        </Field>
      </Form>
    </div>
    )
  }
}

Creator.propTypes = {
  startSession: React.PropTypes.func.isRequired
}

export default connect(null,{startSession})(Creator)
