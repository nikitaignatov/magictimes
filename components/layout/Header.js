import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { periodChanged } from '../../actions/session'

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangePeriod = this.handleChangePeriod.bind(this);
    this.state = {
      start:props.period.start,
      end:props.period.end,
    };
  }
  handleChangeStart (event) {
    this.setState({...this.state, start:event.target.value})
  }
  handleChangeEnd (event) {
    this.setState({...this.state, end:event.target.value})  
  }
  handleChangePeriod (event) {
    const {start,end} = this.state    
    this.props.periodChanged(start,end)
  }
  render() {
    return (
      <header className="main-header">
        <a href="index2.html" className="logo">
          <span className="logo-mini"><b>A</b>TT</span>
          <span className="logo-lg"><b>Magic</b>TIMES</span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>

          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" size="10" type="date" id="navbar-search-input" placeholder="From" value={this.state.start} onChange={this.handleChangeStart} />
              <input type="text" className="form-control" size="10" type="date" id="navbar-search-input" placeholder="To" value={this.state.end}  onChange={this.handleChangeEnd}/>
              <input type="button" value="change period" className="btn btn-info btn-flat" onClick={this.handleChangePeriod} />
            </div>
          </form>
        </nav>
      </header>
    )
  }
}

function mapStateToProps (state) {
  return {
    period: state.server.period,
  }
}

export default connect(
  mapStateToProps,
  {periodChanged}
)(Header)
