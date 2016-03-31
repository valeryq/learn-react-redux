import { INCREMENT, DECREMENT } from '../actions/CounterActions';

/**
 * Change state of store
 *
 * @param state
 * @param action
 * @returns {Array}
 */
export default (state = [], action) => {

  switch (action.type) {
    case INCREMENT:
    {
      return state.map((counter, index) => {
        return index === action.counter_id ? ++counter : counter;
      });

    }

    case DECREMENT:
    {
      return state.map((counter, index) => {
        return index === action.counter_id ? --counter : counter;
      });
    }

    default:
      return state;
  }

}