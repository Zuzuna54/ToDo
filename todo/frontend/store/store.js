import { rootReducer } from '../reducers/root_reducer';
import { createStore } from 'redux';

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;