import todosReducer from './todos_reducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({todos: todosReducer});