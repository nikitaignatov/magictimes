import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
﻿import WorkingHours from '../components/workinghours/WorkingHours'

export default class WorkingHoursContainer extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-12">
              <WorkingHours />
            </div>
        </div>
      </div>
    )
  }
}
