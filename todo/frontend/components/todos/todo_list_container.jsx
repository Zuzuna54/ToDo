import { connect } from 'react-redux';
import allTodos from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';


const mSP = state => ({
  todos: allTodos(state)
});

const mDP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mSP, mDP)(TodoList);