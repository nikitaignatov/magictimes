import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import {  updateSettings } from '../../actions'

export default class SettingsForm extends Component {
    render () {
      const {  updateSettings,settings } = this.props
      return (
          <div className="box">
            <form>
                <div className="box-body">
                  <div className="form-group">
                    <label for="ticket_url">Gemini url, <strong>{'{ticket}'}</strong> will be replaced with ticket id</label>
                      <input type="text" id="ticket_url" ref="ticket_url" className="form-control" placeholder="Message.." value={settings.gemini.ticket_url} />
                  </div>
              </div>
              <div className="box-footer" key={'submit-button'}>
                  <div className="text-right">
                      <button type="button" className="btn btn-flat" onClick={(e)=>{
                        var data = {
                          ticket_url:this.refs.ticket_url.value,
                          ticket:this.refs.ticket.value,
                          type:1
                        }
                        updateSettings(data)
                        }}>Save</button>
                  </div>
              </div>
              </form></div>
      );
    }
}

SettingsForm.propTypes = {
  session: PropTypes.object,
}

export default connect(null,
  { updateSettings }
)(SettingsForm)
