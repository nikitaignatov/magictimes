import React, { Component } from 'react'
import Layout from '../components/layout/Layout'
import {periodChanged} from '../actions/session'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const {periodChanged} = this.props
    const {period_start, period_end} = this.props.params
    console.log('LE_PERIOD', period_start, period_end)
    periodChanged(period_start, period_end)
    return (
    <Layout data={this.props.data}>
      {this.props.children}
    </Layout>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.reports.data,
  }
}

export default connect(
  mapStateToProps,
  {periodChanged}
)(App)
