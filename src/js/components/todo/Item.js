import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <li className={ this.props.complete ? 'complete' : '' } id={ this.props.index } onClick={ this.onClick.bind(this) }>{ this.props.value }</li>
    )

  }

  onClick(e) {
    this.props.onClick(this.props.id);
  }
}