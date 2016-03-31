import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';

/**
 * Logger middleware ( I can change it to redux-logger )
 *
 * @param store
 */
let logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

/**
 * Async middleware ( I can change it to redux-thunk )
 *
 * @param store
 */
let async = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch);
  } else {
    next(action);
  }
};

/**
 * 
 */
export default createStore(
  reducers,
  {
    counters: [0, 2, 5],
    todo: {
      input_value: '',
      list: [
        { id: 0, text: 'My super text', complete: false },
        { id: 1, text: 'Second todo', complete: true }
      ]
    }
  },
  applyMiddleware(logger, async)
);