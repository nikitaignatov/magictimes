import React, { Component, PropTypes } from 'react'

export default class Today extends Component {
  render () {
    const { today } = this.props
    return (
      <table className="table table-hover">
        <thead>
        </thead>
        <tbody>
          {today.map(item => <tr  key={item.id}>
                               <td>
                                 {item.log}
                               </td>
                               <td>
                                 {item.startTime}
                               </td>
                               <td>
                                 {item.endTime}
                               </td>
                               <td>
                                 {item.duration}
                               </td>
                             </tr>
           )}
        </tbody>
      </table>
    )
  }
}
