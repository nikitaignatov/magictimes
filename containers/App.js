import React, { Component } from 'react'
﻿import Layout from '../components/layout/Layout'

export default class App extends Component {
  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    )
  }
}
