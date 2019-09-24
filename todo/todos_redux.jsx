import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import { receiveTodos, receiveTodo } from './frontend/actions/todo_actions';
import  Root from "./frontend/components/root";
import allTodos from "./frontend/reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById("root");
  const testComponent = <h1>Yo, we're up and running!</h1>
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  const store = configureStore();
  window.store = store;

  ReactDOM.render(< Root store={store} />, root);

})

