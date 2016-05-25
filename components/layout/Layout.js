import React, { Component, PropTypes} from 'react'
﻿import Header from './Header'
﻿import Footer from './Footer'
﻿import SideBar from './SideBar'
﻿import IndicatorBox from './IndicatorBox'


export default class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
          <div className="content">
            <div className="row">
                <div className="col-lg-3 col-xs-6">
                  <IndicatorBox title="Total hours" value="0" icon="dashboard" color="aqua" />
                </div>
                <div className="col-lg-3 col-xs-6">
                  <IndicatorBox title="Total sessions" value="0" icon="comment" color="aqua" />
                </div>
                <div className="col-lg-3 col-xs-6">
                  <IndicatorBox title="Total questions" value="0" icon="question" color="aqua" />
                </div>
                <div className="col-lg-3 col-xs-6">
                  <IndicatorBox title="Total Tickets" value="0" icon="ticket" color="aqua" />
                </div>
            </div>
            {this.props.children}
          </div>
        </div>
        <div className="control-sidebar-bg"></div>
        <Footer />
      </div>
    )
  }
}
