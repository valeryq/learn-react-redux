export const SET_TODO_VALUE = 'set_todo_value';
export const SAVE_TODO = 'save_todo';
export const COMPLETE_ITEM = 'complete_item';

/**
 * Set todo value action
 *
 * @returns {{type: string}}
 */
export function setTodoValue(value) {
  return { type: SET_TODO_VALUE, value: value }
}

/**
 * Save todo object
 *
 * @returns {{type: string}}
 */
export function saveTodo() {
  return { type: SAVE_TODO };
}

/**
 * Complete item action
 *
 * @param id
 */
export function completeItem(id) {
  return dispatch => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cm(id));
      }, 2000);
    });

    promise.then(result => {
      dispatch(result);
    });
  };
  // return (dispatch) => setTimeout(() => dispatch(cm(id)), 2000);
}

function cm(id) {
  return { type: COMPLETE_ITEM, id: id };
}
