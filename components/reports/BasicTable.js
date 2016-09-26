import React, { Component } from 'react'
import { connect } from 'react-redux'


class BasicTable extends Component {
  render () {
    const { report } = this.props
    const rows = (report[0]||{rows:[]}).rows.map(x => x.name)

    const severityColor = (input) => {
      if(input==='danger') return 'bg-red'
      if(input==='warning') return 'bg-yellow'
      if(input==='success') return 'bg-green'
      return input
    }

    const view = (input) => {
      if(input.Case === 'Double'){
       return (<strong>{input.Fields[0].toString()}</strong>)
      }
    }

    const celltitle = (row) => {
      return row.description + '\n\nExplanation:\n' + row.indicator.explanation + '\n\nSuggestion:\n' + row.indicator.suggestion
    }
    
    return (  
      <table className="table table-bordered table-hover">
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
            {report.map((col,ri)=>                                  
            <tr key={'c' + ri}>
              <th>{col.key}</th>
              {col.rows.map((row,i) =>  
              <td className={severityColor(row.indicator.severity)} title={celltitle(row)}  data-toggle="modal" data-target={ '#modal'+ri }>
              {view(row.value)}                 
              </td>
              )}
            </tr>
          )}
        </tbody>
      </table>  
    )
  }
}
export default connect(null, {})(BasicTable)
