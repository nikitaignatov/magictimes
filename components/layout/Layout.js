import React, { Component, PropTypes} from 'react'
﻿import Header from './Header'
﻿import Footer from './Footer'
﻿import SideBar from './SideBar'

import ReduxToastr from 'react-redux-toastr'

export default class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <ReduxToastr
              timeOut={4000}
              newestOnTop={true}
              position="top-right"/>
        <Header />
        <SideBar />
        <div className="content-wrapper">
          <div className="content">
            {this.props.children}
          </div>
        </div>
        <div className="control-sidebar-bg"></div>
        <Footer />
      </div>
    )
  }
}
