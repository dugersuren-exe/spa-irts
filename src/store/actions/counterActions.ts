import { AppDispatch } from '../store';
import { increment } from '../reducers/counterReducer';

export const incrementAsync = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};