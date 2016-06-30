import React, { Component, PropTypes } from 'react'

export default class WorkingHours extends Component {
  render () {
    var columns = (
      <tr>
        <th rowspan="1" colspan="1">Date</th>
        <th rowspan="1" colspan="1">From</th>
        <th rowspan="1" colspan="1">To</th>
        <th rowspan="1" colspan="1">Lunch</th>
        <th rowspan="1" colspan="1">Confirmed</th>
      </tr>
    )
    return (
      <div className="box">
            <div className="box-header">
              <h3 className="box-title">Data Table With Full Features</h3>
            </div>
            <div className="box-body">
              <div id="example1_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                <div className="row"><div className="col-sm-12">
                <table id="example1" className="table table-bordered table-striped dataTable" role="grid" aria-describedby="example1_info">
                <thead>
                  {columns}
                </thead>
                <tbody>
                  <tr role="row" className="even">
                    <td className="">Presto</td>
                    <td className="sorting_1">Opera 9.2</td>
                    <td>Win 88+ / OSX.3+</td>
                    <td>-</td>
                    <td>A</td>
                  </tr>
                </tbody>
                <tfoot>
                  {columns}
                </tfoot>
              </table></div>

                </div><div className="row"><div className="col-sm-5"><div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-7"><div className="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul className="pagination"><li className="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0">Previous</a></li><li className="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0">2</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="3" tabindex="0">3</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="4" tabindex="0">4</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="5" tabindex="0">5</a></li><li className="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="6" tabindex="0">6</a></li><li className="paginate_button next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="7" tabindex="0">Next</a></li></ul></div></div></div></div>
            </div>
          </div>
    );
  }
}
