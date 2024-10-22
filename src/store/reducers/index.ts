import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import teachersReducer from './teachersReducer';
import studentsReducer from './studentsReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  teachers: teachersReducer,
  students: studentsReducer,
});

export default rootReducer;