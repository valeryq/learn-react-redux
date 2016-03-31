import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../actions/CounterActions';

class CounterContainer extends Component {
  render() {
    return (
      <div>
        {
          this.props.counters.map((value, index) => {
            return <Counter id={ index } key={ index } value={ value } onIncrement={ this.props.increment } onDecrement={ this.props.decrement } />
          })
        }
      </div>
    )
  }
}

export default connect(
  state => ({ counters: state.counters }),
  { increment, decrement }
)(CounterContainer);