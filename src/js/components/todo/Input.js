import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <input type="text" id={ this.props.id } name={ this.props.name } value={ this.props.value }
             onChange={ this.onChange.bind(this) } onKeyPress={ this.props.onKeyPress }/>
    )
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }
}