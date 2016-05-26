import React, { Component, PropTypes } from 'react'
import { reduxForm, addArrayValue } from 'redux-form'
import { connect } from 'react-redux'
import {  changeSettings } from '../../actions'

export const fields = [
  'round_minutes_to',
  'gemini.ticket_url',
  'gemini.api_key'
]

export default class SettingsForm extends Component {
  render () {
    const {
      changeSettings,settings, fields: { round_minutes_to, gemini } ,handleSubmit
     } = this.props
    return (
      <div className="box">
        <form onSubmit={handleSubmit(this.props.changeSettings.bind(this))}>
          <div className="box-body">
            <div>
              <label for="round_minutes_to">Round up minutes to nearest</label>
              <div>
                <input type="number" id="round_minutes_to" className="form-control" placeholder="15" min="0" max="60" {...round_minutes_to}/>
              </div>
            </div>
            <div className="form-group">
              <label for="ticket_url">Gemini url, <strong>{'{ticket}'}</strong> will be replaced with ticket id</label>
                <input type="text" id="ticket_url" ref="ticket_url" className="form-control" placeholder="https://gemini.." {...gemini.ticket_url} />
            </div>
            <div className="form-group">
              <label for="api_key">Gemini your api key</label>
              <input type="text" id="api_key" className="form-control" placeholder="Mdjdkls843sb.." {...gemini.api_key} />
            </div>
          </div>
          <div className="box-footer" key={'submit-button'}>
              <div className="text-right">
                  <button type="submit" className="btn btn-flat">Save</button>
              </div>
          </div>
        </form>
      </div>
    );
  }
}

SettingsForm.propTypes = {
  session: PropTypes.object,
  fields: PropTypes.object.isRequired,
  changeSettings: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'settings',
  fields
}, state => ({ initialValues: state.settings }),{changeSettings})
(SettingsForm)
