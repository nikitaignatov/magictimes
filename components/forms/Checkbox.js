import React from 'react';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }
  render() {
    return (
      <label className={this.props.labelClassName}>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          value={this.state.isChecked}
          onChange={this.onChange}
        />  {this.props.labelText}
      </label>
    );
  }
}
