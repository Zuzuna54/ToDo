import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const preloadedState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = preloadedState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS: {
      
      const newState = {};
      
      for(let i = 0; i < action.todos.length; i++) {
        const { id } = action.todos[i];
        newState[id] = action.todos[i];
      }
      return newState;
    }

    case RECEIVE_TODO: {
      const { id, title, body, done } = action.todo;
      const newPiece = { [id]: { id, title, body, done } };
      return merge( {}, state, newPiece );
    }

    default:
      return state;
  }
}

export default todosReducer;