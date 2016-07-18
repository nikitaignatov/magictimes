import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, Form,actions } from 'react-redux-form'
import { startSession } from '../../actions/session'

export class Creator extends Component {
  
  render () {
    const { session, startSession,dispatch } = this.props
    return (
    <div className="box-body">
      <Form model="session" onSubmit={(d)=>console.info('submit',d,startSession(d))}>
        <Field model="session.comment">
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
  dispatch: React.PropTypes.func.isRequired,
  session: React.PropTypes.shape({
    comment: React.PropTypes.string.isRequired,
  }).isRequired,
}
function mapStateToProps (state) {
  return { session: state.session }
}


export default connect(mapStateToProps,{startSession})(Creator)
