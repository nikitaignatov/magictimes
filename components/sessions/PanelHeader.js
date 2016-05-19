﻿import React, { Component,PropTypes} from 'react'

export default class PanelHeader extends Component {
    render() {
      const { onSessionDeleted } = this.props
      var data = this.props.session.Value;
        return (
          <div className="box-header with-border">
              <h3 className="box-title"><strong>{data.Name}</strong></h3>
              <div className="box-tools pull-right">
                  <span data-toggle="tooltip" title="3 New Messages" className="badge bg-green"></span>
                  <button type="button" className="btn btn-box-tool" data-widget="collapse">
                      <i className="fa fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-box-tool remove-session" data-widget="remove" onClick={onSessionDeleted}>
                      <i className="fa fa-times"></i>
                  </button>
              </div>
          </div>
        )
    }
    deleteSession(e) {
        this.props.deleteSession(this.props.session.Key)
    }
}

PanelHeader.propTypes = {
  session: PropTypes.object,
  onSessionDeleted: PropTypes.func
}
