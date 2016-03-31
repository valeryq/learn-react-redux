import { combineReducers } from 'redux';
import CounterReducer from '../reducers/CounterReducer';
import TodoReducer from '../reducers/TodoReducer';

export default combineReducers({
  counters: CounterReducer,
  todo: TodoReducer
});