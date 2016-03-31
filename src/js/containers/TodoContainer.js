import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItems from '../components/todo/ListItems';
import Input from '../components/todo/Input';
import { setTodoValue, saveTodo, completeItem } from '../actions/TodoActions';

class TodoContainer extends Component {

  render() {
    return (
      <div className="todo">
        <label htmlFor="todo">Enter your todo: </label>
        <Input onChange={ this.props.setTodoValue } onKeyPress={ this.handleKeyPressInput.bind(this) } value={ this.props.todo.input_value } />
        <button onClick={ this.props.saveTodo }>Save todo</button>

        <ListItems items={ this.props.todo.list } onClickItem={ this.props.completeItem } />
      </div>
    )
  }

  handleKeyPressInput(event) {
    if (event.key == 'Enter') {
      this.props.saveTodo();
    }
  }

}

export default connect(
  state => ({ todo: state.todo }),
  { setTodoValue, saveTodo, completeItem }
)(TodoContainer);