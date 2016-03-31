import React, { Component, PropTypes } from 'react';

export default class extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <h1>{ this.props.value }</h1>
        <button onClick={ () => this.props.onIncrement(this.props.id) }>+</button>
        <button onClick={ () => this.props.onDecrement(this.props.id) }>-</button>
      </div>
    );
  }

}