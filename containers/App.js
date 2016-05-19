import React, { Component } from 'react'
import SessionsContainer from './SessionsContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Sessions</h2>
        <hr/>
        <SessionsContainer />
      </div>
    )
  }
}
