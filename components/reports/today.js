import React, { Component, PropTypes } from 'react'
import { viewTimeReportBy } from '../../actions/session'
import { connect } from 'react-redux'

class Today extends Component {
  render () {
    const { today, time_report } = this.props
    const rows = (time_report[0]||{rows:[]}).rows.map(x => x.name)
    console.log('erere',rows)
    return (
    <div>
      <button onClick={(e) => this.props.viewTimeReportBy()}>
        Load data
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              key
            </th>
            {rows.map((column) => 
               <th key={column}>
                 {column.replace(/_/gi," ")}
               </th>
             )}
          </tr>
        </thead>
        <tbody>        
            {time_report.map((col,ri)=>                       
             <tr key={'c' + ri}>
              <th>{col.key}</th>
              {col.rows.map((row,i) =>  
               <td className={row.indicator.severity} title={row  .description}>
                 <strong>{row.value.Fields[0].toString()}</strong> 
                 <small className="text-muted"> {row.unit}</small>
               </td>
              )}
             </tr>
          )}
        </tbody>
      </table>
    </div>
    )
  }
}
export default connect(null, {viewTimeReportBy})(Today)
