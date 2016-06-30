import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
﻿import Header from './Header'
﻿import Footer from './Footer'
﻿import SideBar from './SideBar'

import ReduxToastr, {toastr} from 'react-redux-toastr'

export default class Layout extends Component {
  render() {
    const { notification , prompt} = this.props.notifications
    if(notification && notification.kind){
      let call = notification.kind.Case.toLowerCase()
      const options= {
        timeOut: 10000,
        progressBar: true,
        extendedTimeOut: 15000,
        newestOnTop:true,
        position: 'top-right'
      }
      toastr[call](notification.title, notification.message, options)
    }

    if(prompt && prompt.kind){
      let values = _
        .chain(this.props.users)
        .keyBy('Email')
        .mapValues('Name')
        .value();

      console.log('VALS',values)

      swal({
        title: "Who is this?",
        text: 'You need to register the user:',
        input: 'select',
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputOptions: values,
      }).then(function(user) {
        if (user) {
          console.log('SELECTED', user)
        }
      });
    }

    return (
      <div className="wrapper">
        <ReduxToastr />
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


function mapStateToProps(state) {
  return {
    notifications: state.notifications,
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Layout)
