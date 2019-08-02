import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store'

const App = (
  // Provider组件把store提供给每个内部的组件
  <Provider store={store}>
    <TodoList />
  </Provider>
)
  
ReactDOM.render( App , document.getElementById('root'));