import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SettingsForm from '../components/settings/SettingsForm'

class SettingsContainer extends Component {
  render() {
    const { settings } = this.props
    return (
      <div className="row">
        <div className="col-sm-12">
          <SettingsForm settings={settings} />
        </div>
      </div>
    )
  }
}

SettingsContainer.propTypes = {
  settings: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

export default connect(
  mapStateToProps,
  null
)(SettingsContainer)
