import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import state from './state';

// ACTIONS
export const initStore = (initialState = state) => {
  return createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(thunkMiddleware)));
};
