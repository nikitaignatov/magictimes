import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { submitTime } from '../../actions/session'
import Checkbox from '../forms/Checkbox';

export default class SessionSubmitForm extends Component {
  render () {
    const key = "this.props.session.Key"
    const session = this.props.session
    var createSubTicket=false;
    var items = []
    if (session.IsValid && !session.IsSubmitted) {
      items.push(
        <div className="box-footer" key={'submit-button'}>
          <div className="row">
            <div className="col-sm-6">
              <Checkbox ref="createSubTicket" labelText="Create sub ticket" />
            </div>
            <div className="col-sm-6">
              <div className="text-right">
                 <div className="btn-group">
                    <button type="button" onClick={(e)=> this.props.submitTime(key,'current', this.refs.createSubTicket.state.isChecked)} className="btn btn-info">Submit to Gemini</button>
                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="#" onClick={(e)=> this.props.submitTime(key,'all', this.refs.createSubTicket.state.isChecked)} title="will add log entry for each of the participants of this session">Submit for all users</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        {items}
      </div>
    );
  }
}

SessionSubmitForm.propTypes = {
  session: PropTypes.object,
}

export default connect(null,
  { submitTime }
)(SessionSubmitForm)
