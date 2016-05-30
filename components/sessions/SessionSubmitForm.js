import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { submitTime } from '../../actions'

export default class SessionSubmitForm extends Component {
  render () {
    const { submitTime } = this.props
    const key = this.props.session.Key
    const session = this.props.session.Value
    var items = []
    if (session.IsValid && !session.IsSubmitted) {
        items.push(
            <div className="box-footer" key={'submit-button'}>
                <div className="text-right">
                    <button
                      type="button"
                      className="btn btn-default btn-flat"
                      onClick={(e)=> submitTime(key,'all')}
                      title="will add log entry for each of the participants of this session">Submit for all</button>
                    
                    <button type="button" className="btn btn-info btn-flat" onClick={(e)=> submitTime(key,'current')}>Submit</button>
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
