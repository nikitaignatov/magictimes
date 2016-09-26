import React, { Component } from 'react'
import Layout from '../components/layout/Layout'
import { connect } from 'react-redux'

class App extends Component {
  render() {
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
  {}
)(App)

