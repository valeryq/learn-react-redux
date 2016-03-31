import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodoContainer';

render(
  <Provider store={ store }>
    <div>
      <CounterContainer />
      <TodoContainer />
    </div>
  </Provider>,
  document.getElementById('app')
);
