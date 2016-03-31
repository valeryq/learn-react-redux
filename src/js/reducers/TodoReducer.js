import { SET_TODO_VALUE, SAVE_TODO, COMPLETE_ITEM } from '../actions/TodoActions';

/**
 * Change state of store
 *
 * @param state
 * @param action
 * @returns {{}}
 */
export default (state = {}, action) => {

  switch (action.type) {
    case SET_TODO_VALUE:
    {

      let new_todo = { ...state };

      new_todo.input_value = action.value;

      return new_todo;
    }

    case SAVE_TODO:
    {
      let new_todo = { ...state };

      /* If all is ok => give random id */
      if (new_todo.input_value.trim() != '') {
        new_todo.list.push({ id: Math.random(), text: new_todo.input_value });
        new_todo.input_value = '';
      }

      return new_todo;
    }

    case COMPLETE_ITEM:
    {
      let new_todo = { ...state };

      for (let todo of new_todo.list) {
        if (todo.id == action.id) {
          todo.complete = !todo.complete;
        }
      }

      return new_todo;
    }

    default:
      return state;
  }

}