import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Reducer-үүдийг импортлоно
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;