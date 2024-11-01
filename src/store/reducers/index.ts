import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import teachersReducer from './teachersReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  teachers: teachersReducer,
});

export default rootReducer;