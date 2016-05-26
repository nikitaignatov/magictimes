import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class SessionDetails extends Component {
  toTicketUrl(template, ticket){
    return template.replace(/{ticket}/gi,ticket)
  }
  render() {
    var settings = this.props.settings;
    var data = this.props.session.Value;
    data.Start = moment(data.Transaction.Started, moment.ISO_8601).fromNow()
    data.End = moment(data.Transaction.Ended, moment.ISO_8601).fromNow()
    data.Duration = moment.duration(data.Transaction.Duration).humanize()
    var url = this.toTicketUrl(settings.gemini.ticket_url, data.Ticket)
    return (
      <table className="table text-muted table-striped table-hover">
         <tbody>
              <tr><td>Duration</td><th>{data.Duration}</th></tr>
              <tr><td>Started</td><td>{data.Start}</td></tr>
              <tr><td>Ended</td><td>{data.End}</td></tr>
              <tr><td>Ticket</td><td><a href={url}>{data.Ticket}</a></td></tr>
              <tr><td>TimeEntryId</td><td>{data.TimeEntryId}</td></tr>
              <tr><td>Tx</td><td>{data.Transaction.TransactionId}</td></tr>
         </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

export default connect(
  mapStateToProps,
  null
)(SessionDetails)
