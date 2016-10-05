import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

class TimeLog extends Component {
  render () {
    const { user, data, entry } = this.props
    return (
    <li key={entry.id}>
      <i className="fa fa-clock-o"></i>
      <div className="timeline-item">
        <span className="time"><i className="fa fa-clock-o"></i> {moment(entry.startTime, moment.ISO_8601).format('HH:mm')}</span>
        <h3 className="timeline-header"><a href="/" target="_blank">{data.projectsById[entry.project].code}-{entry.issue}</a> {data.issuesById[entry.issue].name}</h3>
        <div className="timeline-body pre">
          <strong>{entry.log}</strong>
        </div>
        <div className="timeline-footer">
          <span className="label label-success">logged {moment.duration(entry.duration).asHours()} h</span>
          <span>&nbsp;</span>
          {entry.indicators.map(indicator => <span key={'link'+indicator.name} className={'label label-' + indicator.severity} title={indicator.suggestion}><i className="fa fa-flag"></i> &nbsp; {indicator.name}</span>)}
        </div>
      </div>
    </li>
    )
  }
}

class Commit extends Component {
  render () {
    const { user, data, entry } = this.props
    return (
    <li key={entry.revision}>
      <i className="fa fa-check-square bg-blue"></i>
      <div className="timeline-item">
        <span className="time"><i className="fa fa-clock-o"></i> {moment(entry.date, moment.ISO_8601).format('HH:mm')}</span>
        <h3 className="timeline-header">
          <span className="label label-default">{entry.repo}</span>
          <span>&nbsp;</span>
          <span className="label label-default">{entry.branch}</span>
          <span>&nbsp;</span>
          {entry.issues.map(issue => [<a href="/" target="_blank" key={'link'+issue}><span className="label label-primary">GEM:{issue}</span></a>,<span>&nbsp;</span>])}
        </h3>
        <div className="timeline-body pre">
          <strong>{entry.message}</strong>
        </div>
        <div className="timeline-footer">
        </div>
      </div>
    </li>
    )
  }
}

class TimelineItem extends Component {
  render () {
    const { user, data, entry } = this.props
    const print = () => {
      switch (entry.Case) {
        case 'Commit':
          return <Commit entry={entry.Fields[0]} data={data} user={user} />
        case 'TimeLog':
          return <TimeLog entry={entry.Fields[0]} data={data} user={user} />
      }
    }
    return (
    print()
    )
  }
}
class TimelineSeparator extends Component {
  render () {
    const { entry } = this.props
    return (
    <li className="time-label" key={entry}>
      <span className="bg-black">{entry}</span>
    </li>
    )
  }
}

class Timeline extends Component {
  render () {
    const { user, data } = this.props
    console.log('TL', this.props)

    const timeline = () => {
      if (data.timeline && user && data.timeline[user.id]) {
        return data.timeline[user.id].map(x => [<TimelineSeparator entry={x.Item1} />, x.Item2.map(entry => <TimelineItem user={user} data={data} entry={entry} />)])
      } else {
        return null
      }
    }
    return (
    <ul className="timeline">
      <li className="time-label">
        <span className="bg-red">{user.fullName}: recent activity</span>
      </li>
      <li>
        <i className="fa fa-envelope bg-blue"></i>
        <div className="timeline-item">
          <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>
          <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
          <div className="timeline-body">
            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt
            zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...
          </div>
          <div className="timeline-footer">
            <a className="btn btn-primary btn-xs">Read more</a>
            <a className="btn btn-danger btn-xs">Delete</a>
          </div>
        </div>
      </li>
      {timeline()}
      <li>
        <i className="fa fa-comments bg-yellow"></i>
        <div className="timeline-item">
          <span className="time"><i className="fa fa-clock-o"></i> 27 mins ago</span>
          <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>
          <div className="timeline-body">
            Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!
          </div>
          <div className="timeline-footer">
            <a className="btn btn-warning btn-flat btn-xs">View comment</a>
          </div>
        </div>
      </li>
      <li>
        <i className="fa fa-clock-o bg-black"></i>
      </li>
    </ul> )
  }
}

export default connect(null, {})(Timeline)
